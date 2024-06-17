/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "components/UI/Atoms/Breadcrumb/breadcrumb";

import ContainerMenu from "components/UI/Organism/ContainerMenu";

// Fetching
import getPokemonDetail from "services/privates-routes/getPokemonDetail";
import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";
import { Slider } from "components/UI/Atoms/Slider/slider";

const fillLoading = new Array(6).fill(null);

const PokemonDetail: React.FC = () => {
  const { id, name } = useParams();
  const navigate = useNavigate();

  // Query
  const pokemonDetail = useQuery({
    queryKey: ["getPokemonList", id],
    queryFn: () => getPokemonDetail.getPokemonDetail(Number(id)),
    retry: 0,
  });

  console.log("pokemonDetail =>", pokemonDetail);

  const STATS_POKEMON = useMemo(() => {
    if (!pokemonDetail.data && pokemonDetail.isFetching) {
      return (
        <div className="p-4 flex flex-col bg-red-500 w-full gap-5 rounded-md">
          <Skeleton className="h-[10px] w-[50px] rounded-xl" />
          {fillLoading.map((_: any, index: number) => {
            return (
              <Skeleton className="h-[20px] w-full rounded-xl" key={index} />
            );
          })}
        </div>
      );
    }

    if (pokemonDetail.data && !pokemonDetail.isFetching) {
      const { data }: { data: any } = pokemonDetail;
      return (
        <div className="p-4 flex flex-col bg-red-500 w-full gap-5 rounded-md">
          <p>Stats {data.name}</p>
          {data.stats.map((items: any, index: number) => {
            return (
              <div key={index}>
                <div className="flex gap-4 items-center">
                  <p>{items.stat.name}</p>
                  <p>:</p>
                  <p>{items.base_stat}</p>
                </div>
                <Slider
                  defaultValue={[items.base_stat]}
                  max={100}
                  step={1}
                  disabled
                />
              </div>
            );
          })}
        </div>
      );
    }
  }, [pokemonDetail]);

  return (
    <ContainerMenu>
      <div className="p-4">
        <Breadcrumb className="mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="cursor-pointer">
                <p onClick={() => navigate("/")}>Pokemon List</p>
              </BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbLink className="cursor-pointer">
                <p>{name}</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Detail Pokemon */}
        <div className="bg-red-200 flex justify-between items-center gap-40">
          {/* Stats */}
          <div className="bg-green-200 flex-1">{STATS_POKEMON}</div>

          {/* Iamge */}
          <div className="bg-yellow-200 flex-1">image</div>

          {/* wrapper name pokemon, types, abilities, button next forms */}
          <div className="bg-blue-200 flex-1">type</div>
        </div>
      </div>
    </ContainerMenu>
  );
};

export default PokemonDetail;
