import React from "react";
import { Link } from "react-router-dom";
import { Images, Icons } from "../../../assets";
const Navigation = () => {
  return (
    <nav>
      <ul className="main-features">
        <li className="main-logo">
          <Link to="/">
            <img src={Images.PokeLogo} alt="pokeBall" className="img-logo" />
          </Link>
        </li>
        <li className="main-items">
          <Link to="/">
            <Icons.RiHome3Line className="main-icons" />
          </Link>
        </li>
        <li className="main-items">
          <a href="#">
            <Icons.RiPagesLine className="main-icons" />
          </a>
        </li>
        <li className="main-items">
          <Link to="/event">
            <Icons.RiCalendarEventLine className="main-icons" />
          </Link>
        </li>
        <li className="main-items">
          <Link to="/store">
            <Icons.RiStore3Line className="main-icons" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
