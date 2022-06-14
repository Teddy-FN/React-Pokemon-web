import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../actions";

const PokemonPages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getAllDatasPokemon.data);
  console.log("INI DATA NYA BRAY", data);
  useEffect(() => {
    dispatch(actions.getAllDatasPokemon());
  }, []);

  return (
    <div>
      {data.results?.map((items, idx) => {
        const splitUrlImages = items.url.split("/");
        console.log("INI ID IMAGES", splitUrlImages);
        const getId = splitUrlImages[splitUrlImages.length - 2];
        console.log("INI GET IDNYA BRAU", getId);

        return (
          <div key={idx}>
            <h1>{items.name}</h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId}.png`}
              alt="hero-img"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonPages;
