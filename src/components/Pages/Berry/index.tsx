import React from "react";
import { useQuery } from "@tanstack/react-query";
import ContainerMenu from "components/UI/Organism/ContainerMenu";
import { useNavigate } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "components/UI/Atoms/Breadcrumb/breadcrumb";

import PokemonBerryList from "components/UI/Organism/PokemonBerryList";

// State
import userStorePagination from "state/pagination";

// Fetch
import getPokemonBerryList from "services/privates-routes/getPokemonBerryList";

const Berry = () => {
  const pagination = userStorePagination();

  const navigate = useNavigate();

  // Query
  const getBerry = useQuery({
    queryKey: ["getBerry", pagination.next, pagination.offset],
    queryFn: () =>
      getPokemonBerryList.getPokemonBerryList(
        pagination.next,
        pagination.offset,
      ),
  });

  return (
    <ContainerMenu>
      <div className="p-4">
        <Breadcrumb className="mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="cursor-pointer">
                <p onClick={() => navigate("/berry")}>Berries</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <PokemonBerryList
          data={getBerry}
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
export default Berry;
