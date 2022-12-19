import { Repository } from "src/seedwork/repository";
import { Recipe } from "./recipe.model";

export interface RecipesRepositoryInteface extends Repository<Recipe> {
  
}