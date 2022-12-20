import { Item, ItemsRepositoryInterface } from '@/ordering/domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';
import { TypeOrmRepositoryBase } from '../typeorm';

@Injectable()
export class ItemsRepository
  extends TypeOrmRepositoryBase<Item>
  implements ItemsRepositoryInterface
{
  public constructor(
    @InjectRepository(Item)
    repository: TypeOrmRepository<Item>,
  ) {
    super(repository);
  }
}
