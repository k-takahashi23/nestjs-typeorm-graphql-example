import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewRecipeInput } from '../inputs/new-recipe.input';
import { RecipesArgs } from '../args/recipes.args';
import { Recipe } from '../../domain/aggregates/recipe/recipe.entity';
import { RecipeAddUsecase } from '../../application/usecases/recipe/add/recipe.add.usecase';
import { Inject } from '@nestjs/common';
import { RecipeFindOneByIdUsecase } from 'src/ordering/application/usecases/recipe/find-one-by-id/recipe.find-one-by-id.usecase';
import { RecipeFindAllUsecase } from 'src/ordering/application/usecases/recipe/find-all/recipe.find-all.usecase';
import { RecipeDeleteUsecase } from 'src/ordering/application/usecases/recipe/delete/recipe.delete.usecase';
import { RecipeFindOneByIdRequest } from 'src/ordering/application/usecases/recipe/find-one-by-id/recipe.find-one-by-id.request';

@Resolver((of) => Recipe)
export class RecipesResolver {
  constructor(
    private readonly recipeAddUsecase: RecipeAddUsecase,

    @Inject('RecipeFindOneByIdUsecase')
    private readonly recipeFindOneByIdUsecase: RecipeFindOneByIdUsecase,
    private readonly recipeFindAllUsecase: RecipeFindAllUsecase,
    private readonly recipeDeleteUsecase: RecipeDeleteUsecase,
  ) {}

  @Query((returns) => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    const request = new RecipeFindOneByIdRequest(id);
    const response = await this.recipeFindOneByIdUsecase.handle(request);
    return response.recipe;
  }

  @Query((returns) => [Recipe])
  async recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return await this.recipeFindAllUsecase.handle(recipesArgs);
  }

  @Mutation((returns) => Recipe)
  async addRecipe(
    @Args('newRecipeData') newRecipeData: NewRecipeInput,
  ): Promise<Recipe> {
    return await this.recipeAddUsecase.handle(newRecipeData);
  }

  @Mutation((returns) => Boolean)
  async removeRecipe(@Args('id') id: string) {
    return await this.recipeDeleteUsecase.handle(id);
  }
}
