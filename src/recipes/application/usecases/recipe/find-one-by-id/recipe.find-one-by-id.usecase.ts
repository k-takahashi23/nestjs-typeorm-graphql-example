import { Usecase } from "src/seedwork/usecase";
import { RecipeFindOneByIdRequest } from "./recipe.find-one-by-id.request";
import { RecipeFindOneByIdResponse } from "./recipe.find-one-by-id.response";

export interface RecipeFindOneByIdUsecase extends Usecase<RecipeFindOneByIdRequest, RecipeFindOneByIdResponse> {

}