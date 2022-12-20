import { Inject, Injectable } from '@nestjs/common';
import { UsersRepositoryInterface } from 'src/ordering/domain/aggregates/user/users.repository.interface';
import { InjectionTokens } from 'src/ordering/ordering.injection-tokens';
import { UserChangeNameRequest } from '../../usecases/user/change-name/user.change-name.request';
import { UserChangeNameResponse } from '../../usecases/user/change-name/user.change-name.response';
import { UserChangeNameUsecase } from '../../usecases/user/change-name/user.change-name.usecase';

@Injectable()
export class UserChangeNameInteractor implements UserChangeNameUsecase {
  public constructor(
    @Inject(InjectionTokens.UsersRepository)
    private readonly usersRepository: UsersRepositoryInterface,
  ) {}

  public async handle(
    request: UserChangeNameRequest,
  ): Promise<UserChangeNameResponse> {
    const user = await this.usersRepository.findOneById(request.id);
    user.changeName(request.newName);
    await this.usersRepository.save(user);
    return new UserChangeNameResponse(user);
  }
}
