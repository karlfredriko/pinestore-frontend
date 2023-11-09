import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Pine } from "../models/pine";
import { Cart } from "../models/cart";
import Header from "../components/Header";

const Root = () => {
  const data = useLoaderData() as Pine[];
  const [pineList, setPineList] = useState<Pine[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    setPineList(data);
  }, [data]);
  return (
    <>
      <Header cart={cart} />
      <main>
        <div id="modal" className="modal">
          "Not the bees, NOT THE BEEES, AAARGH!"
        </div>
        <Outlet context={{ pineList, cart, setCart }} />
      </main>
    </>
  );
};

export default Root;
