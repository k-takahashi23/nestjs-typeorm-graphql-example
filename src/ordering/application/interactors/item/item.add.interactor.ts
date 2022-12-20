import { Inject, Injectable } from '@nestjs/common';
import { Item } from 'src/ordering/domain/aggregates/item/item.entity';
import { ItemsRepositoryInterface } from 'src/ordering/domain/aggregates/item/items.repository.interface';
import { ItemAddRequest } from '../../usecases/item/add/item.add.request';
import { ItemAddResponse } from '../../usecases/item/add/item.add.response';
import { ItemAddUsecase } from '../../usecases/item/add/item.add.usecase';

@Injectable()
export class ItemAddInteractor implements ItemAddUsecase {
  constructor(
    @Inject('ItemsRepository')
    private readonly itemsRepository: ItemsRepositoryInterface,
  ) {}

  async handle(request: ItemAddRequest): Promise<ItemAddResponse> {
    const newItem = new Item(request.id, request.id);
    await this.itemsRepository.save(newItem);
    return new ItemAddResponse(new Item(request.id, 'aaa'));
  }
}
