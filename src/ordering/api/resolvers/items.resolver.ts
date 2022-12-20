import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Item } from '../../domain/aggregates/item/item.entity';
import { Inject } from '@nestjs/common';
import { ItemFindOneByIdUsecase } from 'src/ordering/application/usecases/item/find-one-by-id/item.find-one-by-id.usecase';
import { ItemFindOneByIdRequest } from 'src/ordering/application/usecases/item/find-one-by-id/item.find-one-by-id.request';
import { ItemAddUsecase } from 'src/ordering/application/usecases/item/add/item.add.usecase';
import { ItemAddRequest } from 'src/ordering/application/usecases/item/add/item.add.request';
import { v4 as uuidv4 } from "uuid";

@Resolver((of) => Item)
export class ItemsResolver {
  constructor(
    @Inject('ItemAddUsecase')
    private readonly itemAddInteractor: ItemAddUsecase,

    @Inject('ItemFindOneByIdUsecase')
    private readonly itemFindOneByIdInteractor: ItemFindOneByIdUsecase,
    // private readonly itemFindAllUsecase: ItemFindAllUsecase,
    // private readonly itemDeleteUsecase: ItemDeleteUsecase,
  ) {}

  @Query((_) => Item)
  async item(@Args('id') id: string): Promise<Item> {
    const request = new ItemFindOneByIdRequest(id);
    const response = await this.itemFindOneByIdInteractor.handle(request);
    return response.item;
  }

  // @Query((returns) => [Item])
  // async items(@Args() itemsArgs: ItemsArgs): Promise<Item[]> {
  //   return await this.itemFindAllUsecase.handle(itemsArgs);
  // }

  @Mutation((_) => Item)
  async addItem(): Promise<Item> {
    // TMP
    const uuid = uuidv4()
    console.log('uuid,', uuid)
    const request = new ItemAddRequest(uuid)
    const response = await this.itemAddInteractor.handle(request);
    return response.item;
  }

  // @Mutation((returns) => Boolean)
  // async removeItem(@Args('id') id: string) {
  //   return await this.itemDeleteUsecase.handle(id);
  // }
}
