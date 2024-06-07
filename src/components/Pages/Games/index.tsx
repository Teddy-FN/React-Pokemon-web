import React from "react";
import { useQuery } from "@tanstack/react-query";
import ContainerMenu from "components/UI/Organism/ContainerMenu";

import GamesList from "components/UI/Organism/GamesList";

// Fetch
import getPokemonGamesList from "services/privates-routes/getPokemonGamesList";

const Games = () => {
  // Query
  const getGames = useQuery({
    queryKey: ["getGames"],
    queryFn: () => getPokemonGamesList.getPokemonGameList(),
  });

  return (
    <ContainerMenu>
      <div className="p-4">
        <GamesList data={getGames} />
      </div>
    </ContainerMenu>
  );
};
export default Games;
