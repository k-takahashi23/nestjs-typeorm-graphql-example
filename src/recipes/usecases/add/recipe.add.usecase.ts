import { Inject, Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RecipesRepositoryInteface } from 'src/recipes/domain/models/recipes.repository.interface';
import { NewRecipeInput } from '../../api/dto/new-recipe.input';
import { Recipe } from '../../domain/models/recipe.model';
import { RecipesRepository } from '../../infrastructure/recipes.repository';

@Injectable()
export class RecipeAddUsecase {
  constructor(
    @Inject('RecipesRepository')
    private readonly recipesRepository: RecipesRepositoryInteface
  ) {}
  
  async handle(
    @Args('newRecipeData') newRecipeData: NewRecipeInput,
  ): Promise<Recipe> {
    const recipe = await this.recipesRepository.save(newRecipeData);
    return recipe;
  }
}