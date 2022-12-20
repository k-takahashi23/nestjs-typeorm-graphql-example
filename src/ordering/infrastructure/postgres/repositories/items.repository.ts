import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../../../domain/aggregates/item/item.entity';
import { ItemsRepositoryInterface } from 'src/ordering/domain/aggregates/item/items.repository.interface';
import { Repository as TypeOrmRepository } from 'typeorm';
import { TypeOrmRepositoryBase } from '../typeorm/repository.base';

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
