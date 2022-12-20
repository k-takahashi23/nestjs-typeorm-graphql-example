import { Repository } from "src/seedwork/repository";
import { Recipe } from "./recipe.entity";

export interface RecipesRepositoryInterface extends Repository<Recipe> {
  
}