import { useNavigate, useOutletContext } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { Cart } from "../models/cart";
import DisplayCartItem from "../components/DisplayCartItem";
import { showConfirmationModal } from "../utils/helper";

type CartPageContext = {
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
};

const CartPage = () => {
  const { cart, setCart }: CartPageContext = useOutletContext();
  const navigate = useNavigate();

  const closeDealHandler = () => {
    setCart([]);
    navigate("/");
    showConfirmationModal(false);
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
        <h2>Här var det tomt. :(</h2>
      )}
    </>
  );
};

export default CartPage;
