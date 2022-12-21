import { Inject, Injectable } from '@nestjs/common';

import { UserAddRequest } from '../../usecases/user/add/user.add.request';
import { UserAddResponse } from '../../usecases/user/add/user.add.response';
import { UserAddUsecase } from '../../usecases/user/add/user.add.usecase';

import { User, UsersRepositoryInterface } from '@/modules/ordering/domain';
import { InjectionTokens } from '@/modules/ordering/ordering.injection-tokens';

@Injectable()
export class UserAddInteractor implements UserAddUsecase {
  public constructor(
    @Inject(InjectionTokens.UsersRepository)
    private readonly usersRepository: UsersRepositoryInterface,
  ) {}

  public async handle(request: UserAddRequest): Promise<UserAddResponse> {
    const newUser = User.new(request.name);
    await this.usersRepository.save(newUser);
    return new UserAddResponse(newUser);
  }
}
