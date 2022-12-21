import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { NewItemInput, ChangeItemNameInput } from '../inputs';

import {
  ItemFindOneByIdUsecase,
  ItemFindOneByIdRequest,
  ItemAddRequest,
  ItemAddUsecase,
  ItemChangeNameRequest,
  ItemChangeNameUsecase,
} from '@/modules/ordering/application';
import { Item } from '@/modules/ordering/domain';
import { InjectionTokens } from '@/modules/ordering/ordering.injection-tokens';

@Resolver(() => Item)
export class ItemsResolver {
  public constructor(
    @Inject(InjectionTokens.ItemFindOneByIdUsecase)
    private readonly itemFindOneByIdInteractor: ItemFindOneByIdUsecase,
    @Inject(InjectionTokens.ItemAddUsecase)
    private readonly itemAddInteractor: ItemAddUsecase,
    @Inject(InjectionTokens.ItemChangeNameUsecase)
    private readonly itemChangeNameInteractor: ItemChangeNameUsecase,
  ) {}

  @Query(() => Item)
  public async item(@Args('id') id: string): Promise<Item> {
    const request = new ItemFindOneByIdRequest(id);
    const response = await this.itemFindOneByIdInteractor.handle(request);
    return response.item;
  }

  @Mutation(() => Item)
  public async addItem(
    @Args('newItemInput') input: NewItemInput,
  ): Promise<Item> {
    const request = new ItemAddRequest(input.name);
    const response = await this.itemAddInteractor.handle(request);
    return response.item;
  }

  @Mutation(() => Item)
  public async changeItemName(
    @Args('changeItemNameInput') input: ChangeItemNameInput,
  ): Promise<Item> {
    const request = new ItemChangeNameRequest(input.id, input.newName);
    const response = await this.itemChangeNameInteractor.handle(request);
    return response.item;
  }
}
