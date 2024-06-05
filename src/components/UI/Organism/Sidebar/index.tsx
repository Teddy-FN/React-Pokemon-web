import React from "react";
import { Link } from "react-router-dom";
import { GiWoodCabin, GiGamepad, GiTrail, GiFruitBowl } from "react-icons/gi";

// Import Images
import IconLogo from "assets/img/pokeball.png";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-10 px-4 py-10">
      <img
        src={IconLogo}
        alt="logo-pokeball"
        accessKey="logo-pokeball"
        className="max-w-12 max-h-12 mx-auto"
      />

      <div className="flex flex-col gap-6">
        <Link to="/" className="flex gap-4 items-center">
          <GiWoodCabin className="h-8 w-8" />
          <p className="font-bold text-base">Home</p>
        </Link>
        <Link to="/games" className="flex gap-4 items-center">
          <GiGamepad className="h-8 w-8" />
          <p className="font-bold text-base">Games</p>
        </Link>
        <Link to="/location" className="flex gap-4 items-center">
          <GiTrail className="h-8 w-8" />
          <p className="font-bold text-base">Locations</p>
        </Link>
        <Link to="/" className="flex gap-4 items-center">
          <GiFruitBowl className="h-8 w-8" />
          <p className="font-bold text-base">Berries</p>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
