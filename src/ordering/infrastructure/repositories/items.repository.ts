import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from '../../domain/aggregates/item/item.entity';
import { ItemsRepositoryInterface } from 'src/ordering/domain/aggregates/item/items.repository.interface';
import { Repository as TypeOrmRepository } from 'typeorm';

@Injectable()
export class ItemsRepository implements ItemsRepositoryInterface {
  @InjectRepository(Item)
  private readonly _repository: TypeOrmRepository<Item>;

  public async findAll(itemsArgs: any): Promise<Item[]> {
    return this._repository.find();
  }

  public async findOneById(id: string): Promise<Item> {
    return this._repository.findOneBy({ id })
  }

  public async save(entity: Item): Promise<void> {
    this._repository.save(entity);
    return;
  }

  public async remove(entity: Item): Promise<void> {
    this._repository.remove(entity);
    return;
  }
}
