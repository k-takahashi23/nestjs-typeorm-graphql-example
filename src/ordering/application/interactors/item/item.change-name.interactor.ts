import { Inject, Injectable } from '@nestjs/common';
import { ItemsRepositoryInterface } from 'src/ordering/domain/aggregates/item/items.repository.interface';
import { InjectionTokens } from 'src/ordering/ordering.injection-tokens';
import { ItemChangeNameRequest } from '../../usecases/item/change-name/item.change-name.request';
import { ItemChangeNameResponse } from '../../usecases/item/change-name/item.change-name.response';
import { ItemChangeNameUsecase } from '../../usecases/item/change-name/item.change-name.usecase';

@Injectable()
export class ItemChangeNameInteractor implements ItemChangeNameUsecase {
  constructor(
    @Inject(InjectionTokens.ItemsRepository)
    private readonly itemsRepository: ItemsRepositoryInterface,
  ) {}

  async handle(request: ItemChangeNameRequest): Promise<ItemChangeNameResponse> {
    const item = await this.itemsRepository.findOneById(request.id);
    item.changeName(request.newName)
    await this.itemsRepository.save(item);
    return new ItemChangeNameResponse(item);
  }
}
