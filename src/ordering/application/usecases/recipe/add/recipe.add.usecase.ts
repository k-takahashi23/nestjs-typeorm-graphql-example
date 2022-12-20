import { Inject, Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RecipesRepositoryInterface } from 'src/ordering/domain/aggregates/recipe/recipes.repository.interface';
import { NewRecipeInput } from '../../../../api/inputs/new-recipe.input';
import { Recipe } from '../../../../domain/aggregates/recipe/recipe.entity';

@Injectable()
export class RecipeAddUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInterface,
  ) {}

  async handle(
    @Args('newRecipeData') newRecipeData: NewRecipeInput,
  ): Promise<Recipe> {
    const recipe = await this.recipesRepository.save(newRecipeData);
    return recipe;
  }
}
