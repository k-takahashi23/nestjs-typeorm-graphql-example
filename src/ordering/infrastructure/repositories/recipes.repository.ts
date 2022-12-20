import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from '../../api/inputs/new-recipe.input';
import { RecipesArgs } from '../../api/args/recipes.args';
import { Recipe } from '../../domain/aggregates/recipe/recipe.entity';
import { RecipesRepositoryInterface } from 'src/ordering/domain/aggregates/recipe/recipes.repository.interface';

@Injectable()
export class RecipesRepository implements RecipesRepositoryInterface {
  public async findOneById(id: string): Promise<Recipe> {
    return new Recipe(id);
  }

  public async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  public async save(data: NewRecipeInput): Promise<void> {
    return;
  }

  public async remove(id: any): Promise<void> {
    return;
  }
}
