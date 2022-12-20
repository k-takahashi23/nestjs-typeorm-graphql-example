import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from '../api/inputs/new-recipe.input';
import { RecipesArgs } from '../api/args/recipes.args';
import { Recipe } from '../domain/models/recipe.model';
import { RecipesRepositoryInterface } from '../domain/models/recipes.repository.interface';

@Injectable()
export class RecipesRepository implements RecipesRepositoryInterface {
  async save(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return new Recipe(id);
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}