import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/ordering/domain/aggregates/user/user.entity';
import { UsersRepositoryInterface } from 'src/ordering/domain/aggregates/user/users.repository.interface';
import { InjectionTokens } from 'src/ordering/ordering.injection-tokens';
import { UserAddRequest } from '../../usecases/user/add/user.add.request';
import { UserAddResponse } from '../../usecases/user/add/user.add.response';
import { UserAddUsecase } from '../../usecases/user/add/user.add.usecase';

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
