import { Pine } from "./pine";

export type Response = {
  status: string;
  statusCode: number;
  data: Pines | object | [];
  error: null | string;
};
