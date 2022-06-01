import React from "react";
import { Icons, Images } from "../../../assets";
import "./mainMenu.css";
import { Link } from "react-router-dom";

const MainMenu = () => {
  console.log(Icons);
  return (
    <div className="layout">
      <nav>
        <ul className="main-features">
          <li className="main-logo">
            <Link to="/home">
              <img src={Images.PokeLogo} alt="pokeBall" className="img-logo" />
            </Link>
          </li>
          <li className="main-items">
            <Link to="/home">
              <Icons.RiHome3Line className="main-icons" />
            </Link>
          </li>
          <li className="main-items">
            <a href="#">
              <Icons.RiPagesLine className="main-icons" />
            </a>
          </li>
          <li className="main-items">
            <a href="#">
              <Icons.RiCalendarEventLine className="main-icons" />
            </a>
          </li>
          <li className="main-items">
            <a href="#">
              <Icons.RiStore3Line className="main-icons" />
            </a>
          </li>
        </ul>
      </nav>
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
      <aside className="aside">
        <div className="img-header">
          <img
            src={Images.PokemonPage}
            alt="pokemon logo"
            className="main-img"
          />
          <div>
            <h2>Get Ready For The Adventure With Pikacu ⚡️ !</h2>
            <p></p>
          </div>
        </div>
        <div className="container grid two-cols">
          <div>Content1</div>
          <div>Content2</div>
        </div>
      </aside>
    </div>
  );
};

export default MainMenu;
