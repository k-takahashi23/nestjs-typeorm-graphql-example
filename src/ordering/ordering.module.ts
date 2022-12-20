import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { ItemsResolver } from './api/resolvers/items.resolver';
import { ItemFindOneByIdInteractor } from './application/interactors/item/item.find-one-by-id.interactor';
import { ItemAddInteractor } from './application/interactors/item/item.add.interactor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './domain/aggregates/item/item.entity';
import { ItemsRepository } from './infrastructure/repositories/items.repository';
import { InjectionTokens } from './ordering.injection-tokens';
import { ItemChangeNameInteractor } from './application/interactors/item/item.change-name.interactor';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item])
  ],
  providers: [
    // api
    ItemsResolver,
    // application
    {
      provide: InjectionTokens.ItemFindOneByIdUsecase,
      useClass: ItemFindOneByIdInteractor,
    },
    {
      provide: InjectionTokens.ItemAddUsecase,
      useClass: ItemAddInteractor,
    },
    {
      provide: InjectionTokens.ItemChangeNameUsecase,
      useClass: ItemChangeNameInteractor,
    },
    // infrastructure
    {
      provide: InjectionTokens.ItemsRepository,
      useClass: ItemsRepository,
    },
    // common
    DateScalar,
  ],
})
export class OrderingModule {}
