import { CartItem } from "../models/cartItem";

export const showModalMsg = (msg: string) => {
  const modalElem = document.querySelector("#modal") as HTMLDivElement;
  modalElem.textContent = `${msg}`;
  modalElem.style.display = "block";
  setTimeout(() => (modalElem.style.display = "none"), 1200);
};

export const findItemInCart = (cart: CartItem[], pineId: string) => {
  const existingItem = cart.find((item) => item.id === pineId);
  return existingItem;
};

export const updateCartItem = (cart: CartItem[], pineId: string) => {
  const updatedCart = cart.map((item) => {
    if (item.id === pineId) {
      return { ...item, amount: item.amount + 1 };
    }
    return item;
  });
  return updatedCart;
};

export const addNewCartItem = (
  cart: CartItem[],
  pineId: string,
  pineName: string
) => {
  const newItem = { name: pineName, id: pineId, amount: 1 };
  return [...cart, newItem];
};

export const checkCurrentStock = (cart: CartItem[], pineId: string) => {
  let currentStock: number = 5;
  cart.forEach((item) =>
    item.id === pineId ? (currentStock -= item.amount) : null
  );
  return currentStock;
};
