import ShoppingCartIcon from "./ShoppingCartIcon";
import { CartItem } from "../models/cartItem";
import { Link } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { getStoreData } from "../utils/httpClient";
import { StoreInfo } from "../models/storeInfo";

type HeaderProps = {
  cart: CartItem[];
};

const Header: FC<HeaderProps> = ({ cart }) => {
  const [storeInfo, setStoreInfo] = useState<StoreInfo>();
  useEffect(() => {
    const loader = async () => {
      const data = await getStoreData();
      setStoreInfo(data);
    };
    loader();
  }, []);

  return (
    <header>
      <div>
        <Link to={"/"}>
          <img
            className="logo"
            src="/assets/grangarden-logo.png"
            alt="Grangårdens logga"
          />
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          {storeInfo && (
            <>
              <h1>{storeInfo?.storeName}</h1>
              <small>{storeInfo?.mantra}</small>
            </>
          )}
        </Link>
      </div>
      <div>
        <Link to={"/cart"}>
          <ShoppingCartIcon cart={cart} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
