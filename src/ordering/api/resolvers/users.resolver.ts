import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../domain/aggregates/user/user.entity';
import { Inject } from '@nestjs/common';
import { UserFindOneByIdUsecase } from 'src/ordering/application/usecases/user/find-one-by-id/user.find-one-by-id.usecase';
import { UserFindOneByIdRequest } from 'src/ordering/application/usecases/user/find-one-by-id/user.find-one-by-id.request';
import { UserAddUsecase } from 'src/ordering/application/usecases/user/add/user.add.usecase';
import { UserAddRequest } from 'src/ordering/application/usecases/user/add/user.add.request';
import { NewUserInput } from '../inputs/new-user.input';
import { ChangeUserNameInput } from '../inputs/change-user-name.input';
import { InjectionTokens } from 'src/ordering/ordering.injection-tokens';
import { UserChangeNameUsecase } from 'src/ordering/application/usecases/user/change-name/user.change-name.usecase';
import { UserChangeNameRequest } from 'src/ordering/application/usecases/user/change-name/user.change-name.request';

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
