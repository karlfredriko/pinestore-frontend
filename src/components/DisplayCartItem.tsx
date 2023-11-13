import { Dispatch, FC, SetStateAction } from "react";
import { Cart } from "../models/cartItem";
import s from "./DisplayCartItem.module.css";
import { useOutletContext } from "react-router-dom";

type DisplayCartItemProps = {
  cart: Cart;
};
type DisplayCartItemContext = {
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
};

const DisplayCartItem: FC<DisplayCartItemProps> = ({
  cart: { name, amount, id },
}) => {
  const fontAwesome: string = "fa-regular fa-trash-can";
  const { cart, setCart } = useOutletContext<DisplayCartItemContext>();
  const removeItemHandler = () => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className={s.container}>
      <h2>{name}</h2>
      <div className={s.amountTrashContainer}>
        <h3>{amount} st</h3>
        <i onClick={removeItemHandler} className={`${fontAwesome} ${s.icon}`} />
      </div>
    </div>
  );
};

export default DisplayCartItem;
