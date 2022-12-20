import { Repository } from "src/seedwork/repository";
import { Recipe } from "./recipe.model";

export interface RecipesRepositoryInterface extends Repository<Recipe> {
  
}