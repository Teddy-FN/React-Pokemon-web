import React from "react";
import ContainerMenu from "components/UI/Organism/ContainerMenu";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "components/UI/Atoms/Breadcrumb/breadcrumb";

// Organism Component
import PokemonLocationList from "components/UI/Organism/PokemonLocationList";

// Services
import getPokemonLocationList from "services/privates-routes/getPokemonLocationList";

// State
import userStorePagination from "state/pagination";

const Location = () => {
  const navigate = useNavigate();
  const pagination = userStorePagination();

  // Query
  const queryLocation = useQuery({
    queryKey: ["getPokemonLocationList", pagination.next, pagination.offset],
    queryFn: () =>
      getPokemonLocationList.getPokemonLocationList(
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
                <p onClick={() => navigate("/location")}>Location List</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <PokemonLocationList
          data={queryLocation}
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

export default Location;
