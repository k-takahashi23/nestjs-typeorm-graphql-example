import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@/ordering/domain';
import { Inject } from '@nestjs/common';
import {
  UserFindOneByIdUsecase,
  UserAddUsecase,
  UserChangeNameUsecase,
  UserFindOneByIdRequest,
  UserAddRequest,
  UserChangeNameRequest,
} from '@/ordering/application';
import { InjectionTokens } from '@/ordering/ordering.injection-tokens';
import { NewUserInput, ChangeUserNameInput } from '../inputs';

@Resolver((_) => User)
export class UsersResolver {
  public constructor(
    @Inject(InjectionTokens.UserFindOneByIdUsecase)
    private readonly userFindOneByIdInteractor: UserFindOneByIdUsecase,
    @Inject(InjectionTokens.UserAddUsecase)
    private readonly userAddInteractor: UserAddUsecase,
    @Inject(InjectionTokens.UserChangeNameUsecase)
    private readonly userChangeNameInteractor: UserChangeNameUsecase,
  ) {}

  @Query((_) => User)
  public async user(@Args('id') id: string): Promise<User> {
    const request = new UserFindOneByIdRequest(id);
    const response = await this.userFindOneByIdInteractor.handle(request);
    return response.user;
  }

  @Mutation((_) => User)
  public async addUser(
    @Args('newUserInput') input: NewUserInput,
  ): Promise<User> {
    const request = new UserAddRequest(input.name);
    const response = await this.userAddInteractor.handle(request);
    return response.user;
  }

  @Mutation((_) => User)
  public async changeUserName(
    @Args('changeUserNameInput') input: ChangeUserNameInput,
  ): Promise<User> {
    const request = new UserChangeNameRequest(input.id, input.newName);
    const response = await this.userChangeNameInteractor.handle(request);
    return response.user;
  }
}
