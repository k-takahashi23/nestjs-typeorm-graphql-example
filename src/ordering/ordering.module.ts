import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { ItemsResolver } from './api/resolvers/items.resolver';
import { ItemFindOneByIdInteractor } from './application/interactors/item/item.find-one-by-id.interactor';
import { ItemAddInteractor } from './application/interactors/item/item.add.interactor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './domain/aggregates/item/item.entity';
import { ItemsRepository } from './infrastructure/postgres/repositories/items.repository';
import { UsersRepository } from './infrastructure/postgres/repositories/users.repository';
import { InjectionTokens } from './ordering.injection-tokens';
import { ItemChangeNameInteractor } from './application/interactors/item/item.change-name.interactor';
import { UserAddInteractor } from './application/interactors/user/user.add.interactor';
import { UserFindOneByIdInteractor } from './application/interactors/user/user.find-one-by-id.interactor';
import { UserChangeNameInteractor } from './application/interactors/user/user.change-name.interactor';
import { User } from './domain/aggregates/user/user.entity';
import { UsersResolver } from './api/resolvers/users.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Item, User])],
  providers: [
    // api
    ItemsResolver,
    UsersResolver,
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
    {
      provide: InjectionTokens.UserFindOneByIdUsecase,
      useClass: UserFindOneByIdInteractor,
    },
    {
      provide: InjectionTokens.UserAddUsecase,
      useClass: UserAddInteractor,
    },
    {
      provide: InjectionTokens.UserChangeNameUsecase,
      useClass: UserChangeNameInteractor,
    },
    // infrastructure
    {
      provide: InjectionTokens.ItemsRepository,
      useClass: ItemsRepository,
    },
    {
      provide: InjectionTokens.UsersRepository,
      useClass: UsersRepository,
    },
    // common
    DateScalar,
  ],
})
export class OrderingModule {}
