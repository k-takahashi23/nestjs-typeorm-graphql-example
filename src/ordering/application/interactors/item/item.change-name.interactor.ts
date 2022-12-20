import { Inject, Injectable } from '@nestjs/common';

import { ItemChangeNameRequest } from '../../usecases/item/change-name/item.change-name.request';
import { ItemChangeNameResponse } from '../../usecases/item/change-name/item.change-name.response';
import { ItemChangeNameUsecase } from '../../usecases/item/change-name/item.change-name.usecase';

import { ItemsRepositoryInterface } from '@/ordering/domain';
import { InjectionTokens } from '@/ordering/ordering.injection-tokens';

@Injectable()
export class ItemChangeNameInteractor implements ItemChangeNameUsecase {
  public constructor(
    @Inject(InjectionTokens.ItemsRepository)
    private readonly itemsRepository: ItemsRepositoryInterface,
  ) {}

  public async handle(
    request: ItemChangeNameRequest,
  ): Promise<ItemChangeNameResponse> {
    const item = await this.itemsRepository.findOneById(request.id);
    item.changeName(request.newName);
    await this.itemsRepository.save(item);
    return new ItemChangeNameResponse(item);
  }
}
