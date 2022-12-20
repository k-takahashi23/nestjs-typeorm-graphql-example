import { Usecase } from "src/seedwork/usecase";
import { RecipeFindOneByIdRequest } from "./recipe.findonebyid.request";
import { RecipeFindOneByIdResponse } from "./recipe.findonebyid.response";

export interface RecipeFindOneByIdUsecase extends Usecase<RecipeFindOneByIdRequest, RecipeFindOneByIdResponse> {

}