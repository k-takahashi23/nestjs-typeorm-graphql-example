import { Recipe } from 'src/ordering/domain/aggregates/recipe/recipe.entity';
import { Response } from 'src/seedwork/response';

export class RecipeAddResponse implements Response {
  public constructor(recipe: Recipe) {
    this.recipe = recipe;
  }

  public recipe: Recipe;
}
