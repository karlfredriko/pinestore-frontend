import { Pine } from "../models/pine";

const BASE_URL = "http://localhost:3001/api/v1/grangarden/";

export type PineListLoaderResponse = {
  status: string;
  statusCode: number;
  data: Pine[];
  error: null | string;
};

export const getData = async <T,>(endpoint: string, id?: number) => {
  let url: string = `${BASE_URL}${endpoint}`;
  if (id) {
    url += `/${id}`;
  }
  const res = await fetch(url);
  const json = (await res.json()) as unknown;
  return json as T;
};

export const pineListLoader = async () => {
  const res = await getData<PineListLoaderResponse>("pines");
  return res.data as Pine[];
};

export const showConfirmationModal = (isPine: boolean, pine?: string) => {
  const modal = document.querySelector("#modal") as HTMLDivElement;
  if (isPine) {
    modal.textContent = `En ${pine} har lagts i din kundkorg.`;
  } else {
    modal.textContent = `Tack för att du handlade av oss!`;
  }
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.display = "none";
  }, 1200);
};
