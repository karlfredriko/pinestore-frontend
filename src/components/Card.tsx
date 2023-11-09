import { Cart } from "../models/cart";
import { Pine } from "../models/pine";
import s from "./Card.module.css";
import { FC, MouseEvent, Dispatch, SetStateAction } from "react";
import { showConfirmationModal } from "../utils/helper";

type CardProps = {
  item: Pine;
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
};

const Card: FC<CardProps> = ({ item, cart, setCart }) => {
  const { description, id, name, price, picture } = item;
  const picturePath: string = `/assets/${picture}`;

  const cartHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    const pineId = e.currentTarget.parentElement!.id;
    const pineName = e.currentTarget.nextElementSibling!.textContent;
    if (pineName) {
      showConfirmationModal(true, pineName);
      if (cart.find((item: Cart) => item.id === pineId)) {
        const updatedCart = cart.map((item: Cart) => {
          if (item.id === pineId) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        const newItem: Cart = { name: pineName, id: pineId, amount: 1 };
        setCart([...cart, newItem]);
      }
    }
  };

  return (
    <div className={s.container} id={id}>
      <img className={s.img} src={picturePath} alt={name} />
      <button className={s.button} onClick={cartHandler}>
        Köp
      </button>
      <h2 className={s.name}>{name}</h2>
      <h3 className={s.desc}>{description}</h3>
      <h4 className={s.price}>{price}:-</h4>
    </div>
  );
};

export default Card;
