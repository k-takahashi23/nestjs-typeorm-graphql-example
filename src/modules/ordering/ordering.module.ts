import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemsResolver, UsersResolver, UserProfile } from './api';
import {
  ItemFindOneByIdInteractor,
  ItemAddInteractor,
  ItemChangeNameInteractor,
  UserFindOneByIdInteractor,
  UserAddInteractor,
  UserChangeNameInteractor,
} from './application';
import { Item, User } from './domain';
import { ItemsRepository, UsersRepository } from './infrastructure';
import { InjectionTokens } from './ordering.injection-tokens';

import { DateScalar } from '@/common';

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
