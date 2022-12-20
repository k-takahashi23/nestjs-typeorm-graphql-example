import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { ItemsResolver } from './api/resolvers/items.resolver';
import { ItemFindOneByIdInteractor } from './application/interactors/item/item.find-one-by-id.interactor';
import { ItemAddInteractor } from './application/interactors/item/item.add.interactor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './domain/aggregates/item/item.entity';
import { ItemsRepository } from './infrastructure/repositories/items.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item])
  ],
  providers: [
    // api
    ItemsResolver,
    // application
    {
      provide: 'ItemAddUsecase',
      useClass: ItemAddInteractor,
    },
    {
      provide: 'ItemFindOneByIdUsecase',
      useClass: ItemFindOneByIdInteractor,
    },
    // infrastructure
    {
      provide: 'ItemsRepository',
      useClass: ItemsRepository,
    },
    // common
    DateScalar,
  ],
})
export class OrderingModule {}
