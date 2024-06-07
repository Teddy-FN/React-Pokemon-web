import React from "react";
import ContainerMenu from "components/UI/Organism/ContainerMenu";
import { useQuery } from "@tanstack/react-query";

// Organism Component
import PokemonLocationList from "components/UI/Organism/PokemonLocationList";

// Services
import getPokemonLocationList from "services/privates-routes/getPokemonLocationList";

// State
import userStorePagination from "state/pagination";

const Location = () => {
  const pagination = userStorePagination();

  // Query
  const queryLocation = useQuery({
    queryKey: ["getPokemonLocationList", pagination.next],
    queryFn: () =>
      getPokemonLocationList.getPokemonLocationList(pagination.next),
  });

  return (
    <ContainerMenu>
      <div className="p-4">
        <PokemonLocationList
          data={queryLocation}
          nextPage={() => pagination.handleNext()}
          prevPage={() => pagination.handlePrev()}
          page={pagination.next}
        />
      </div>
    </ContainerMenu>
  );
};

export default Location;
