import React from "react";
import { Icons } from "../../../assets";
import "./style.css";

const BottomMenu = () => {
  return (
    <menu className="bottom-menu-container">
      <div className="bottom-menu-wrapper">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <Link to="/wish-list"> */}
        <div>
          <Icons.RiHeartLine />
          {/* </Link> */}
        </div>
        <div>
          <Icons.RiSearchEyeLine />
        </div>
        <div>
          {/* <Link to="/cart"> */}
          <Icons.RiShoppingCart2Line />
          {/* </Link> */}
        </div>
        {/* <Link to="/login"> */}
        <div>
          <Icons.RiMapPinUserLine />
        </div>
      </div>

      {/* </Link> */}
    </menu>
  );
};

export default BottomMenu;
