import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Item } from '../../domain/aggregates/item/item.entity';
import { Inject } from '@nestjs/common';
import { ItemFindOneByIdUsecase } from 'src/ordering/application/usecases/item/find-one-by-id/item.find-one-by-id.usecase';
import { ItemFindOneByIdRequest } from 'src/ordering/application/usecases/item/find-one-by-id/item.find-one-by-id.request';
import { ItemAddUsecase } from 'src/ordering/application/usecases/item/add/item.add.usecase';
import { ItemAddRequest } from 'src/ordering/application/usecases/item/add/item.add.request';
import { NewItemInput } from '../inputs/new-item.input';

@Resolver((of) => Item)
export class ItemsResolver {
  constructor(
    @Inject('ItemFindOneByIdUsecase')
    private readonly itemFindOneByIdInteractor: ItemFindOneByIdUsecase,
    @Inject('ItemAddUsecase')
    private readonly itemAddInteractor: ItemAddUsecase,
  ) {}

  @Query((_) => Item)
  async item(@Args('id') id: string): Promise<Item> {
    const request = new ItemFindOneByIdRequest(id);
    const response = await this.itemFindOneByIdInteractor.handle(request);
    return response.item;
  }

  @Mutation((_) => Item)
  async addItem(@Args('newItemInput') newItemInput: NewItemInput,): Promise<Item> {
    const request = new ItemAddRequest(newItemInput.name);
    const response = await this.itemAddInteractor.handle(request);
    return response.item;
  }
}
