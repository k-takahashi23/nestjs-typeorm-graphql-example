import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DateScalar } from '../common/scalars/date.scalar';

import { UserProfile } from './api';
import { ItemsResolver } from './api/resolvers/items.resolver';
import { UsersResolver } from './api/resolvers/users.resolver';
import { ItemAddInteractor } from './application/interactors/item/item.add.interactor';
import { ItemChangeNameInteractor } from './application/interactors/item/item.change-name.interactor';
import { ItemFindOneByIdInteractor } from './application/interactors/item/item.find-one-by-id.interactor';
import { UserAddInteractor } from './application/interactors/user/user.add.interactor';
import { UserChangeNameInteractor } from './application/interactors/user/user.change-name.interactor';
import { UserFindOneByIdInteractor } from './application/interactors/user/user.find-one-by-id.interactor';
import { Item } from './domain/aggregates/item/item.entity';
import { User } from './domain/aggregates/user/user.entity';
import { ItemsRepository } from './infrastructure/postgres/repositories/items.repository';
import { UsersRepository } from './infrastructure/postgres/repositories/users.repository';
import { InjectionTokens } from './ordering.injection-tokens';

@Module({
  imports: [TypeOrmModule.forFeature([Item, User])],
  providers: [
    // api
    ItemsResolver,
    UsersResolver,
    UserProfile,
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
