import { Inject, Injectable } from '@nestjs/common';
import { Item } from 'src/ordering/domain/aggregates/item/item.entity';
import { ItemsRepositoryInterface } from 'src/ordering/domain/aggregates/item/items.repository.interface';
import { RecipesRepositoryInterface } from 'src/ordering/domain/aggregates/recipe/recipes.repository.interface';
import { Recipe } from '../../../domain/aggregates/recipe/recipe.entity';
import { RecipeAddRequest } from '../../usecases/recipe/add/recipe.add.request';
import { RecipeAddResponse } from '../../usecases/recipe/add/recipe.add.response';
import { RecipeAddUsecase } from '../../usecases/recipe/add/recipe.add.usecase';

@Injectable()
export class RecipeAddInteractor implements RecipeAddUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInterface,
    // TMP
    @Inject('ItemsRepository')
    private readonly itemsRepository: ItemsRepositoryInterface,
  ) {}

  async handle(request: RecipeAddRequest): Promise<RecipeAddResponse> {
    const newItem = new Item(request.id, request.id);
    await this.itemsRepository.save(newItem);
    return new RecipeAddResponse(new Recipe(request.id));
  }
}
