import ShoppingCartIcon from "./ShoppingCartIcon";
import { Cart } from "../models/cart";
import { Link } from "react-router-dom";
import { FC } from "react";

type HeaderProps = {
  cart: Cart[];
};

const Header: FC<HeaderProps> = ({ cart }) => {
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
          <h1>GranGården</h1>
          <small>Köp din gran hos oss</small>
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
