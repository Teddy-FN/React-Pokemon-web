import React from "react";
import { Icons, Images } from "../../../assets";
import Banner from "../../UI/Banner";
import "./style.css";

const Store = (props) => {
  return (
    <div className="container">
      <Banner
        images={Images.PokemonPage}
        imagesRating={Images.Rating}
        titleBanner="Pokemon Legends Arceus"
        descriptionBanner="Survey, catch, and research wild Pokémon in a long-gone era of
        Sinnoh to complete the region’s first Pokédex."
      />
      <div className="container-store">
        <h3 className="featured">Featured</h3>
        <div className="featured-items">
          <ul className="grid three-cols">
            <li className="list-featured">
              <div className="card-featured">
                <h3>Games</h3>
                <Icons.RiGamepadLine className="featured-icon" />
              </div>
            </li>
            <li className="list-featured">
              <div className="card-featured">
                <h3>Merchandise</h3>
                <Icons.RiTShirtLine className="featured-icon" />
              </div>
            </li>
            <li className="list-featured">
              <div className="card-featured">
                <h3>Sales</h3>
                <Icons.RiPriceTag3Line className="featured-icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Store;
