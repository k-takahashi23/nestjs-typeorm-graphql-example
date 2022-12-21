import { Inject, Injectable } from '@nestjs/common';

import { ItemAddRequest } from '../../usecases/item/add/item.add.request';
import { ItemAddResponse } from '../../usecases/item/add/item.add.response';
import { ItemAddUsecase } from '../../usecases/item/add/item.add.usecase';

import { Item, ItemsRepositoryInterface } from '@/modules/ordering/domain';
import { InjectionTokens } from '@/modules/ordering/ordering.injection-tokens';

@Injectable()
export class ItemAddInteractor implements ItemAddUsecase {
  public constructor(
    @Inject(InjectionTokens.ItemsRepository)
    private readonly itemsRepository: ItemsRepositoryInterface,
  ) {}

  public async handle(request: ItemAddRequest): Promise<ItemAddResponse> {
    const newItem = Item.new(request.name);
    await this.itemsRepository.save(newItem);
    return new ItemAddResponse(newItem);
  }
}
