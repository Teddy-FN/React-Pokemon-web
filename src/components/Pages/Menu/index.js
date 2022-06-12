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
        <Link to="/wish-list">
          <Icons.RiHeartLine />
          Wish List
        </Link>
        <Link to="/support-us">
          <Icons.RiQuestionnaireLine />
          Support
        </Link>
        <Link to="/cart">
          <Icons.RiShoppingCart2Line />
          Cart
        </Link>
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
