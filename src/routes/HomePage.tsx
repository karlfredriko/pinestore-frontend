import Card from "../components/Card";
import { useOutletContext } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { Pine } from "../models/pine";
import { CartItem } from "../models/cartItem";

type HomePageContext = {
  pineList: Pine[];
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

const HomePage = () => {
  const { pineList, cart, setCart } = useOutletContext<HomePageContext>();
  return (
    <>
      {pineList &&
        pineList.map((item) => (
          <Card key={item.id} item={item} cart={cart} setCart={setCart} />
        ))}
    </>
  );
};

export default HomePage;
