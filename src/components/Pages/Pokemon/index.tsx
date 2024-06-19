/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Atoms
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "components/UI/Atoms/Breadcrumb/breadcrumb";

// Organism Component
const ContainerMenu = React.lazy(
  () => import("components/UI/Organism/ContainerMenu"),
);
const PokemonList = React.lazy(
  () => import("components/UI/Organism/PokemonList"),
);

// State
import userStorePagination from "state/pagination";

// Import Fetch
import getPokemonList from "services/privates-routes/getPokemonList";

const Pokemon = () => {
  const navigate = useNavigate();
  const pagination = userStorePagination();

  // Query
  const queryPokemon = useQuery({
    queryKey: ["getPokemonList", pagination.next, pagination.offset],
    queryFn: () =>
      getPokemonList.getPokemonList(pagination.next, pagination.offset),
  });

  return (
    <ContainerMenu>
      <div className="p-4">
        <Breadcrumb className="mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="cursor-pointer">
                <p onClick={() => navigate("/")}>Pokemon List</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <PokemonList
          data={queryPokemon}
          nextPage={() => pagination.handleNext()}
          prevPage={() => pagination.handlePrev()}
          page={pagination.next}
          offset={pagination.offset}
          handleChangeOffset={(e: any) => pagination.handleChangeOffet(e)}
        />
      </div>
    </ContainerMenu>
  );
};

export default Pokemon;
