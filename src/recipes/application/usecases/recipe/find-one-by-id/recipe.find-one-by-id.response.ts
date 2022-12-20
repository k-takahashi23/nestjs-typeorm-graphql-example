import { Recipe } from 'src/recipes/domain/aggregates/recipe/recipe.entity';
import { Response } from 'src/seedwork/response';

export class RecipeFindOneByIdResponse implements Response {
  public constructor(recipe: Recipe) {
    this.recipe = recipe;
  }

  public recipe: Recipe;
}
