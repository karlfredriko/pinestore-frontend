import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Pine } from "../models/pine";
import { CartItem } from "../models/cartItem";
import Header from "../components/Header";

const Root = () => {
  const data = useLoaderData() as Pine[];
  const [pineList, setPineList] = useState<Pine[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setPineList(data);
  }, []); //ignore
  return (
    <>
      <Header cart={cart} />
      <main>
        <div id="modal" className="modal"></div>
        <Outlet context={{ pineList, cart, setCart }} />
      </main>
    </>
  );
};

export default Root;
