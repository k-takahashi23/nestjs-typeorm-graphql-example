import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { NewRecipeInput } from '../../api/dto/new-recipe.input';
import { RecipesArgs } from '../../api/dto/recipes.args';
import { Recipe } from '../../domain/models/recipe.model';
import { RecipesRepository } from '../../infrastructure/recipes.repository';

@Injectable()
export class RecipeAddUsecase {
  constructor(private readonly recipesRepository: RecipesRepository) {}
  
  async handle(
    @Args('newRecipeData') newRecipeData: NewRecipeInput,
  ): Promise<Recipe> {
    const recipe = await this.recipesRepository.create(newRecipeData);
    return recipe;
  }
}