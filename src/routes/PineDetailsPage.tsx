import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { getData } from "../utils/httpClient";
import { Pine } from "../models/pine";
import { IPineByIdResponse } from "../utils/IPineByIdResponse";
import DetailedCard from "../components/DetailedCard";
import { CartItem } from "../models/cartItem";

type PineDetailsPageContext = {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

const PineDetailsPage = () => {
  const [pine, setPine] = useState<Pine>();
  const { id } = useParams<string>();
  const { cart, setCart } = useOutletContext<PineDetailsPageContext>();

  useEffect(() => {
    const getPineById = async () => {
      const pineData = await getData<IPineByIdResponse>("pines", id);
      setPine(pineData.data);
    };
    getPineById();
  }, []); // ignore
  return (
    <>{pine && <DetailedCard pine={pine} cart={cart} setCart={setCart} />}</>
  );
};

export default PineDetailsPage;
