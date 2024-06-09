import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "components/UI/Atoms/Breadcrumb/breadcrumb";

// Organism Component
import ContainerMenu from "components/UI/Organism/ContainerMenu";
import GamesList from "components/UI/Organism/GamesList";

// Fetch
import getPokemonGamesList from "services/privates-routes/getPokemonGamesList";

const Games = () => {
  const navigate = useNavigate();

  // Query
  const getGames = useQuery({
    queryKey: ["getGames"],
    queryFn: () => getPokemonGamesList.getPokemonGameList(),
  });

  return (
    <ContainerMenu>
      <div className="p-4">
        <Breadcrumb className="mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="cursor-pointer">
                <p onClick={() => navigate("/games")}>Games List</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <GamesList data={getGames} />
      </div>
    </ContainerMenu>
  );
};
export default Games;
