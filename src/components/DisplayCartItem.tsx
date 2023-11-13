import { Dispatch, FC, SetStateAction } from "react";
import { CartItem } from "../models/cartItem";
import s from "./DisplayCartItem.module.css";
import { useOutletContext } from "react-router-dom";

type DisplayCartItemProps = {
  cart: CartItem;
};
type DisplayCartItemContext = {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
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
      <h2 className={s.name}>{name}</h2>
      <div className={s.amountTrashContainer}>
        <h3>{amount} st</h3>
        <i onClick={removeItemHandler} className={`${fontAwesome} ${s.icon}`} />
      </div>
    </div>
  );
};

export default DisplayCartItem;
