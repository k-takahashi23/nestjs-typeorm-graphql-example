import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { NewUserInput, ChangeUserNameInput } from '../inputs';

import {
  UserFindOneByIdUsecase,
  UserAddUsecase,
  UserChangeNameUsecase,
  UserFindOneByIdRequest,
  UserAddRequest,
  UserChangeNameRequest,
} from '@/ordering/application';
import { User } from '@/ordering/domain';
import { InjectionTokens } from '@/ordering/ordering.injection-tokens';

@Resolver(() => User)
export class UsersResolver {
  public constructor(
    @Inject(InjectionTokens.UserFindOneByIdUsecase)
    private readonly userFindOneByIdInteractor: UserFindOneByIdUsecase,
    @Inject(InjectionTokens.UserAddUsecase)
    private readonly userAddInteractor: UserAddUsecase,
    @Inject(InjectionTokens.UserChangeNameUsecase)
    private readonly userChangeNameInteractor: UserChangeNameUsecase,
  ) {}

  @Query(() => User)
  public async user(@Args('id') id: string): Promise<User> {
    const request = new UserFindOneByIdRequest(id);
    const response = await this.userFindOneByIdInteractor.handle(request);
    return response.user;
  }

  @Mutation(() => User)
  public async addUser(
    @Args('newUserInput') input: NewUserInput,
  ): Promise<User> {
    const request = new UserAddRequest(input.name);
    const response = await this.userAddInteractor.handle(request);
    return response.user;
  }

  @Mutation(() => User)
  public async changeUserName(
    @Args('changeUserNameInput') input: ChangeUserNameInput,
  ): Promise<User> {
    const request = new UserChangeNameRequest(input.id, input.newName);
    const response = await this.userChangeNameInteractor.handle(request);
    return response.user;
  }
}
