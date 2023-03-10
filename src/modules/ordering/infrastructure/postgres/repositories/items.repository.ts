import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';

import { TypeOrmRepositoryBase } from '../typeorm';

import { Item, ItemsRepositoryInterface } from '@/modules/ordering/domain';

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
