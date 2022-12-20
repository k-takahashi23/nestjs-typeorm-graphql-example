import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepositoryInterface } from 'src/ordering/domain/aggregates/user/users.repository.interface';
import { InjectionTokens } from 'src/ordering/ordering.injection-tokens';
import { UserFindOneByIdRequest } from '../../usecases/user/find-one-by-id/user.find-one-by-id.request';
import { UserFindOneByIdResponse } from '../../usecases/user/find-one-by-id/user.find-one-by-id.response';
import { UserFindOneByIdUsecase } from '../../usecases/user/find-one-by-id/user.find-one-by-id.usecase';

@Injectable()
export class UserFindOneByIdInteractor implements UserFindOneByIdUsecase {
  public constructor(
    @Inject(InjectionTokens.UsersRepository)
    private readonly usersRepository: UsersRepositoryInterface,
  ) {}

  public async handle(
    request: UserFindOneByIdRequest,
  ): Promise<UserFindOneByIdResponse> {
    const user = await this.usersRepository.findOneById(request.id);
    // TODO: Either 型でやる
    if (!user) {
      throw new NotFoundException(request.id);
    }

    return new UserFindOneByIdResponse(user);
  }
}
