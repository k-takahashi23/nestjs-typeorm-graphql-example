import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Item } from '../../domain/aggregates/item/item.entity';
import { Inject } from '@nestjs/common';
import { ItemFindOneByIdUsecase } from 'src/ordering/application/usecases/item/find-one-by-id/item.find-one-by-id.usecase';
import { ItemFindOneByIdRequest } from 'src/ordering/application/usecases/item/find-one-by-id/item.find-one-by-id.request';
import { ItemAddUsecase } from 'src/ordering/application/usecases/item/add/item.add.usecase';
import { ItemAddRequest } from 'src/ordering/application/usecases/item/add/item.add.request';
import { NewItemInput } from '../inputs/new-item.input';
import { ChangeItemNameInput } from '../inputs/change-item-name.input';
import { InjectionTokens } from 'src/ordering/ordering.injection-tokens';
import { ItemChangeNameUsecase } from 'src/ordering/application/usecases/item/change-name/item.change-name.usecase';
import { ItemChangeNameRequest } from 'src/ordering/application/usecases/item/change-name/item.change-name.request';

@Resolver((_) => Item)
export class ItemsResolver {
  public constructor(
    @Inject(InjectionTokens.ItemFindOneByIdUsecase)
    private readonly itemFindOneByIdInteractor: ItemFindOneByIdUsecase,
    @Inject(InjectionTokens.ItemAddUsecase)
    private readonly itemAddInteractor: ItemAddUsecase,
    @Inject(InjectionTokens.ItemChangeNameUsecase)
    private readonly itemChangeNameInteractor: ItemChangeNameUsecase,
  ) {}

  @Query((_) => Item)
  public async item(@Args('id') id: string): Promise<Item> {
    const request = new ItemFindOneByIdRequest(id);
    const response = await this.itemFindOneByIdInteractor.handle(request);
    return response.item;
  }

  @Mutation((_) => Item)
  public async addItem(
    @Args('newItemInput') input: NewItemInput,
  ): Promise<Item> {
    const request = new ItemAddRequest(input.name);
    const response = await this.itemAddInteractor.handle(request);
    return response.item;
  }

  @Mutation((_) => Item)
  public async changeItemName(
    @Args('changeItemNameInput') input: ChangeItemNameInput,
  ): Promise<Item> {
    const request = new ItemChangeNameRequest(input.id, input.newName);
    const response = await this.itemChangeNameInteractor.handle(request);
    return response.item;
  }
}
