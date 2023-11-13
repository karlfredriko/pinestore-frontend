import { useNavigate, useOutletContext } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { CartItem } from "../models/cartItem";
import DisplayCartItem from "../components/DisplayCartItem";
import { closeTheDealModal } from "../utils/helper";

type CartPageContext = {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

const CartPage = () => {
  const { cart, setCart }: CartPageContext = useOutletContext();
  const navigate = useNavigate();

  const closeDealHandler = () => {
    setCart([]);
    navigate("/");
    closeTheDealModal();
  };

  return (
    <>
      {cart.map((item) => (
        <DisplayCartItem key={item.id} cart={item} />
      ))}
      {cart.length > 0 ? (
        <button onClick={closeDealHandler} className="big-btn">
          Avsluta köpet
        </button>
      ) : (
        <h2>Din kundkorg är tom!</h2>
      )}
    </>
  );
};

export default CartPage;
