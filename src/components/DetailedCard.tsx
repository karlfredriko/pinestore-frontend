import {
  FC,
  Dispatch,
  SetStateAction,
  MouseEvent,
  useState,
  useEffect,
} from "react";
import {
  findItemInCart,
  addNewCartItem,
  confirmNewCartItemModal,
  updateCartItem,
  outOfStockModal,
  checkCurrentStock,
} from "../utils/helper";

import { Pine } from "../models/pine";
import s from "./DetailedCard.module.css";
import { CartItem } from "../models/cartItem";

type DetailedCardProps = {
  pine: Pine;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

const DetailedCard: FC<DetailedCardProps> = ({ pine, cart, setCart }) => {
  const [currentStock, setCurrentStock] = useState<number>();
  const { name, description, price, stock, id } = pine;

  const putInCartHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    const pineId = e.currentTarget.parentElement!.id;
    const pineName = e.currentTarget.nextElementSibling!.textContent;
    if (pineName) {
      const existingItem = findItemInCart(cart, pineId);
      if (!existingItem) {
        setCart(addNewCartItem(cart, pineId, pineName));
        confirmNewCartItemModal(pineName);
      }
      if (existingItem) {
        if (existingItem?.amount !== stock) {
          setCart(updateCartItem(cart, pineId));
          confirmNewCartItemModal(pineName);
        } else outOfStockModal(pineName);
      }
    }
  };
  useEffect(() => {
    setCurrentStock(checkCurrentStock(cart, id));
  }, [cart]);

  return (
    <>
      {pine && (
        <div className={s.container} id={id}>
          <img
            className={s.img}
            src={`/assets/${pine.picture}`}
            alt={pine.name}
          />
          <button
            className={`${s.button} ${s.right}`}
            onClick={putInCartHandler}
          >
            Köp
          </button>
          <h2 className={s.name}>{name}</h2>
          <h3 className={s.desc}>{description}</h3>
          <h4 className={s.price}>{price}:-</h4>
          <h4 className={s.stock}>
            {currentStock ? `I lager: ${currentStock} st` : `Tillfälligt slut`}
          </h4>
        </div>
      )}
    </>
  );
};

export default DetailedCard;
