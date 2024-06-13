import React from "react";
import PokemonGif from "assets/gif/pikachu.gif";

const Loading = () => {
  return (
    <div className="h-screen bg-[#00000080] flex justify-center items-center">
      <img src={PokemonGif} alt="gif" />
    </div>
  );
};

export default Loading;
