import { IBaseResponse } from "./IBaseResponse";
import { Pine } from "../models/pine";

export interface IPineLoaderResponse extends IBaseResponse {
  data: Pine[];
}
