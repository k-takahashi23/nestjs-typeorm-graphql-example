import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from '../api/dto/new-recipe.input';
import { RecipesArgs } from '../api/dto/recipes.args';
import { Recipe } from '../domain/models/recipe.model';
import { RecipesRepositoryInteface } from '../domain/models/recipes.repository.interface';

@Injectable()
export class RecipesRepository implements RecipesRepositoryInteface {
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