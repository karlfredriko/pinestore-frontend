import { CartItem } from "../models/cartItem";
import { Pine } from "../models/pine";
import s from "./Card.module.css";
import { FC, MouseEvent, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import {
  addNewCartItem,
  findItemInCart,
  showModalMsg,
  updateCartItem,
} from "../utils/helper";

type CardProps = {
  item: Pine;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

const Card: FC<CardProps> = ({ item, cart, setCart }) => {
  const { id, name, price, picture, stock } = item;
  const navigate = useNavigate();
  const picturePath: string = `/assets/${picture}`;

  const putInCartHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    const pineId = e.currentTarget.parentElement!.id;
    const pineName = e.currentTarget.nextElementSibling!.textContent;
    let modalMessage: string = `En ${pineName} har lagts i din kundkorg.`;
    if (pineName) {
      const existingItem = findItemInCart(cart, pineId);
      if (!existingItem) setCart(addNewCartItem(cart, pineId, pineName));
      if (existingItem)
        if (existingItem?.amount !== stock)
          setCart(updateCartItem(cart, pineId));
        else modalMessage = `${pineName} är tyvärr slut i lager för tillfället`;
    }
    showModalMsg(modalMessage);
  };

  const moreInfoHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const pineId = e.currentTarget.parentElement!.id;
    navigate(`/pine/${pineId}`);
  };

  return (
    <div className={s.container} id={id}>
      <img className={s.img} src={picturePath} alt={name} />
      <button className={`${s.button} ${s.left}`} onClick={moreInfoHandler}>
        Läs mer
      </button>
      <button className={`${s.button} ${s.right}`} onClick={putInCartHandler}>
        Köp
      </button>
      <h2 className={s.name}>{name}</h2>
      <h4 className={s.price}>{price}:-</h4>
    </div>
  );
};

export default Card;
