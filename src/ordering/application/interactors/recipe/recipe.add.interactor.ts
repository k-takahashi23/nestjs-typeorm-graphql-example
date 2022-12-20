import { Inject, Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { Item } from 'src/ordering/domain/aggregates/item/item.entity';
import { ItemsRepositoryInterface } from 'src/ordering/domain/aggregates/item/items.repository.interface';
import { RecipesRepositoryInterface } from 'src/ordering/domain/aggregates/recipe/recipes.repository.interface';
import { NewRecipeInput } from '../../../api/inputs/new-recipe.input';
import { Recipe } from '../../../domain/aggregates/recipe/recipe.entity';
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

  async handle(
    @Args('newRecipeData') newRecipeData: NewRecipeInput,
  ): Promise<Recipe> {
    // TODO: tmp
    const item = new Item('12345', 'aaa')
    const recipe = await this.itemsRepository.save(item);
    return recipe;
  }
}
