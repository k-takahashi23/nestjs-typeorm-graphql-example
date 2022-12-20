import { Inject, Injectable } from '@nestjs/common';
import { Item } from 'src/ordering/domain/aggregates/item/item.entity';
import { ItemsRepositoryInterface } from 'src/ordering/domain/aggregates/item/items.repository.interface';
import { InjectionTokens } from 'src/ordering/ordering.injection-tokens';
import { ItemAddRequest } from '../../usecases/item/add/item.add.request';
import { ItemAddResponse } from '../../usecases/item/add/item.add.response';
import { ItemAddUsecase } from '../../usecases/item/add/item.add.usecase';

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
