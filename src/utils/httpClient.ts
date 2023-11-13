import { StoreInfo } from "../models/storeInfo";
import { Pine } from "../models/pine";
import { IPineLoaderResponse } from "./IPineLoaderResponse";
import { IStoreInfoResponse } from "./IStoreInfoResponse";

const BASE_URL = "http://localhost:3001/api/v1/grangarden/";

export const pineListLoader = async () => {
  const res = await getData<IPineLoaderResponse>("pines");
  return res.data as Pine[];
};

export const getStoreData = async () => {
  const res = await getData<IStoreInfoResponse>("store");
  return res.data as StoreInfo;
};

export const getData = async <T>(endpoint: string, id?: string) => {
  let url: string = `${BASE_URL}${endpoint}`;
  if (id) {
    url += `/${id}`;
  }
  const res = await fetch(url);
  const json = (await res.json()) as unknown;
  return json as T;
};
