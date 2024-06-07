import React from "react";
import { Link } from "react-router-dom";
import { GiWoodCabin, GiGamepad, GiTrail, GiFruitBowl } from "react-icons/gi";

// Import Images
import IconLogo from "assets/img/pokeball.png";

// State
import userStorePagination from "state/pagination";

const SideBar = () => {
  // We Will Reset Pagination to 1 when user click / change Menu
  const pagination = userStorePagination();

  return (
    <div className="flex flex-col gap-10 px-4 py-10">
      <Link
        to="/"
        className="cursor-pointer pl-6"
        onClick={() => pagination.handleResetNext()}
      >
        <img
          src={IconLogo}
          alt="logo-pokeball"
          accessKey="logo-pokeball"
          className="max-w-12 max-h-12"
        />
      </Link>

      <div className="flex flex-col gap-6">
        <Link
          to="/"
          className="flex gap-4 items-center"
          onClick={() => pagination.handleResetNext()}
        >
          <GiWoodCabin className="h-8 w-8" />
          <p className="font-bold text-base">Home</p>
        </Link>
        <Link
          to="/games"
          className="flex gap-4 items-center"
          onClick={() => pagination.handleResetNext()}
        >
          <GiGamepad className="h-8 w-8" />
          <p className="font-bold text-base">Games</p>
        </Link>
        <Link
          to="/location"
          className="flex gap-4 items-center"
          onClick={() => pagination.handleResetNext()}
        >
          <GiTrail className="h-8 w-8" />
          <p className="font-bold text-base">Locations</p>
        </Link>
        <Link
          to="/berry"
          className="flex gap-4 items-center"
          onClick={() => pagination.handleResetNext()}
        >
          <GiFruitBowl className="h-8 w-8" />
          <p className="font-bold text-base">Berries</p>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
