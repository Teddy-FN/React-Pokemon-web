import React from "react";
import Banner from "../../ui/Banner";
import { Images } from "../../../assets";
const MainMenu = () => {
  return (
    <section className="main-menu">
      <Banner
        images={Images.PokemonPage}
        imagesRating={Images.Rating}
        titleBanner="Pokemon Legends Arceus"
        descriptionBanner="Survey, catch, and research wild Pokémon in a long-gone era of
        Sinnoh to complete the region’s first Pokédex."
      />
      <h1>HELLO BRAY</h1>
    </section>
  );
};

export default MainMenu;
