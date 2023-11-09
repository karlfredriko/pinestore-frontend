import axios from "axios";
import { Pine } from "../models/pine";
import { Response } from "../models/response";

const BASE_URL = "http://localhost:3001/api/v1/grangarden/";

export const getData = async (
  endpoint: string,
  id?: number
): Promise<Response> => {
  let url: string = `${BASE_URL}${endpoint}`;
  if (id) {
    url += `/${id}`;
  }
  const res = await axios.get(url);
  // console.log(res);
  return res.data as Response;
};

export const pineListLoader = async (): Promise<Pine[]> => {
  const res = await getData("pines");
  return res.data as Pine[];
};

export const showConfirmationModal = (isPine: boolean, pine?: string) => {
  const modal = document.querySelector("#modal") as HTMLDivElement;
  if (isPine) {
    modal.innerText = `En ${pine} har lagts i din kundkorg.`;
  } else {
    modal.innerText = `Tack för att du handlade av oss!`;
  }
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.display = "none";
  }, 1200);
};
