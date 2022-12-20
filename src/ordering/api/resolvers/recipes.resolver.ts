import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewRecipeInput } from '../inputs/new-recipe.input';
import { RecipesArgs } from '../args/recipes.args';
import { Recipe } from '../../domain/aggregates/recipe/recipe.entity';
import { Inject } from '@nestjs/common';
import { RecipeFindOneByIdUsecase } from 'src/ordering/application/usecases/recipe/find-one-by-id/recipe.find-one-by-id.usecase';
import { RecipeFindOneByIdRequest } from 'src/ordering/application/usecases/recipe/find-one-by-id/recipe.find-one-by-id.request';
import { RecipeAddUsecase } from 'src/ordering/application/usecases/recipe/add/recipe.add.usecase';
import { RecipeAddRequest } from 'src/ordering/application/usecases/recipe/add/recipe.add.request';
import { v4 as uuidv4 } from "uuid";

@Resolver((of) => Recipe)
export class RecipesResolver {
  constructor(
    @Inject('RecipeAddUsecase')
    private readonly recipeAddInteractor: RecipeAddUsecase,

    @Inject('RecipeFindOneByIdUsecase')
    private readonly recipeFindOneByIdInteractor: RecipeFindOneByIdUsecase,
    // private readonly recipeFindAllUsecase: RecipeFindAllUsecase,
    // private readonly recipeDeleteUsecase: RecipeDeleteUsecase,
  ) {}

  @Query((_) => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    const request = new RecipeFindOneByIdRequest(id);
    const response = await this.recipeFindOneByIdInteractor.handle(request);
    return response.recipe;
  }

  // @Query((returns) => [Recipe])
  // async recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
  //   return await this.recipeFindAllUsecase.handle(recipesArgs);
  // }

  @Mutation((_) => Recipe)
  async addRecipe(): Promise<Recipe> {
    // TMP
    const uuid = uuidv4()
    console.log('uuid,', uuid)
    const request = new RecipeAddRequest(uuid)
    const response = await this.recipeAddInteractor.handle(request);
    return response.recipe;
  }

  // @Mutation((returns) => Boolean)
  // async removeRecipe(@Args('id') id: string) {
  //   return await this.recipeDeleteUsecase.handle(id);
  // }
}
