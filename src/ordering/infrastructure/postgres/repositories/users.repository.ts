import { User, UsersRepositoryInterface } from '@/ordering/domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';
import { TypeOrmRepositoryBase } from '../typeorm';

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
