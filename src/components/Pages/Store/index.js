import React from "react";
import { Icons, Images } from "../../../assets";
import Banner from "../../ui/Banner";
import "./style.css";
import Featured from "../../ui/Featured";

const Store = (props) => {
  const datas = [
    {
      id: 1,
      title: "Games",
      icons: Icons.RiGamepadLine,
    },
    {
      id: 2,
      title: "Merchandise",
      icons: Icons.RiTShirtLine,
    },
    {
      id: 3,
      title: "Sales",
      icons: Icons.RiPriceTag3Line,
    },
  ];

  return (
    <section className="store">
      <Banner
        images={Images.PokemonPage}
        imagesRating={Images.Rating}
        titleBanner="Pokemon Legends Arceus"
        descriptionBanner="Survey, catch, and research wild Pokémon in a long-gone era of
        Sinnoh to complete the region’s first Pokédex."
      />
      <div className="container-store">
        <h3 className="featured">Featured</h3>
        <Featured data={datas} />
      </div>
    </section>
  );
};

export default Store;
