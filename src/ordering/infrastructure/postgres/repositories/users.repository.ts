import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../domain/aggregates/user/user.entity';
import { UsersRepositoryInterface } from 'src/ordering/domain/aggregates/user/users.repository.interface';
import { Repository as TypeOrmRepository } from 'typeorm';
import { TypeOrmRepositoryBase } from '../typeorm/repository.base';

@Injectable()
export class UsersRepository
  extends TypeOrmRepositoryBase<User>
  implements UsersRepositoryInterface
{
  public constructor(
    @InjectRepository(User)
    repository: TypeOrmRepository<User>,
  ) {
    super(repository);
  }
}
