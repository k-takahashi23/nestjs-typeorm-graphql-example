import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Item } from 'src/ordering/domain/aggregates/item/item.entity';
import { ItemsRepositoryInterface } from 'src/ordering/domain/aggregates/item/items.repository.interface';
import { ItemFindOneByIdRequest } from '../../usecases/item/find-one-by-id/item.find-one-by-id.request';
import { ItemFindOneByIdResponse } from '../../usecases/item/find-one-by-id/item.find-one-by-id.response';
import { ItemFindOneByIdUsecase } from '../../usecases/item/find-one-by-id/item.find-one-by-id.usecase';

@Injectable()
export class ItemFindOneByIdInteractor implements ItemFindOneByIdUsecase {
  constructor(
    @Inject('ItemsRepository')
    private readonly itemsRepository: ItemsRepositoryInterface,
  ) {}

  async handle(
    request: ItemFindOneByIdRequest,
  ): Promise<ItemFindOneByIdResponse> {
    const { id } = request;

    // TODO
    const item = await this.itemsRepository.findOneById(id);
    if (!item) {
      throw new NotFoundException(id);
    }

    return new ItemFindOneByIdResponse(new Item('aaa', 'aaa'));
  }
}
