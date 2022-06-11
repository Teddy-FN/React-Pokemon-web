import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../assets";

const Menu = (props) => {
  return (
    <menu className="menu">
      <div className="inputSearch">
        <input type="text" placeholder="Search" className="input" />
        <Icons.RiSearchEyeLine className="iconsSeacrh" />
      </div>
      <div className="items user-features">
        <a href="#" className="cart">
          <Icons.RiHeartLine />
          Wish List
        </a>
        <a href="#" className="cart">
          <Icons.RiQuestionnaireLine />
          Support
        </a>
        <a href="#" className="cart">
          <Icons.RiShoppingCart2Fill />
          Cart
        </a>
        <a href="#" className="notifcation">
          <Icons.RiNotification3Line />
        </a>
        <Link to="/login">
          <Icons.RiMapPinUserLine />
          Login / Sign up
        </Link>
      </div>
    </menu>
  );
};

export default Menu;
