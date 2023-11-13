import { IBaseResponse } from "./IBaseResponse";
import { Pine } from "../models/pine";

export interface IPineByIdResponse extends IBaseResponse {
  data: Pine;
}
