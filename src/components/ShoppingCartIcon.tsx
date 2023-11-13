import s from "./ShoppingCartIcon.module.css";
import { CartItem } from "../models/cartItem";
import { FC, useEffect, useState } from "react";

type ShoppingCartIconProps = {
  cart: CartItem[];
};

const ShoppingCartIcon: FC<ShoppingCartIconProps> = ({ cart }) => {
  const [currentAmount, setCurrentAmount] = useState(0);
  const fontAwesome: string = "fa-solid fa-cart-shopping";

  useEffect(() => {
    const newAmount = cart.reduce((total, item) => total + item.amount, 0);
    setCurrentAmount(newAmount);
  }, [cart]);
  return (
    <>
      <div className={s.container}>
        <i className={`${s.cart} ${fontAwesome}`} />
        {currentAmount > 0 && <div className={s.redDot}>{currentAmount}</div>}
      </div>
    </>
  );
};

export default ShoppingCartIcon;
