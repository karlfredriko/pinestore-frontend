import { IBaseResponse } from "./IBaseResponse";
import { StoreInfo } from "../models/storeInfo";

export interface IStoreInfoResponse extends IBaseResponse {
  data: StoreInfo;
}
