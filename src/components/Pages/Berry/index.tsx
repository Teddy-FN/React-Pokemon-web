import React from "react";
import { useQuery } from "@tanstack/react-query";
import ContainerMenu from "components/UI/Organism/ContainerMenu";

import PokemonBerryList from "components/UI/Organism/PokemonBerryList";

// State
import userStorePagination from "state/pagination";

// Fetch
import getPokemonBerryList from "services/privates-routes/getPokemonBerryList";

const Berry = () => {
  const pagination = userStorePagination();

  // Query
  const getBerry = useQuery({
    queryKey: ["getBerry", pagination.next],
    queryFn: () => getPokemonBerryList.getPokemonBerryList(pagination.next),
  });
  console.log(getBerry);

  return (
    <ContainerMenu>
      <div className="p-4">
        <PokemonBerryList
          data={getBerry}
          nextPage={() => pagination.handleNext()}
          prevPage={() => pagination.handlePrev()}
          page={pagination.next}
        />
      </div>
    </ContainerMenu>
  );
};
export default Berry;
