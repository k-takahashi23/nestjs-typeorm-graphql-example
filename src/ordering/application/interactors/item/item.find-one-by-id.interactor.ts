import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { ItemFindOneByIdRequest } from '../../usecases/item/find-one-by-id/item.find-one-by-id.request';
import { ItemFindOneByIdResponse } from '../../usecases/item/find-one-by-id/item.find-one-by-id.response';
import { ItemFindOneByIdUsecase } from '../../usecases/item/find-one-by-id/item.find-one-by-id.usecase';

import { ItemsRepositoryInterface } from '@/ordering/domain';
import { InjectionTokens } from '@/ordering/ordering.injection-tokens';

@Injectable()
export class ItemFindOneByIdInteractor implements ItemFindOneByIdUsecase {
  public constructor(
    @Inject(InjectionTokens.ItemsRepository)
    private readonly itemsRepository: ItemsRepositoryInterface,
  ) {}

  public async handle(
    request: ItemFindOneByIdRequest,
  ): Promise<ItemFindOneByIdResponse> {
    const item = await this.itemsRepository.findOneById(request.id);
    // TODO: Either 型でやる
    if (!item) {
      throw new NotFoundException(request.id);
    }

    return new ItemFindOneByIdResponse(item);
  }
}
