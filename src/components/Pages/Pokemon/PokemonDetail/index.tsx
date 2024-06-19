/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "components/UI/Atoms/Breadcrumb/breadcrumb";
import { Button } from "components/UI/Atoms/Button/button";
import ContainerMenu from "components/UI/Organism/ContainerMenu";
import { Card } from "components/UI/Atoms/Card/card";

// Fetching
import getPokemonDetail from "services/privates-routes/getPokemonDetail";
import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";
import { Slider } from "components/UI/Atoms/Slider/slider";
import CardListName from "components/UI/Molecule/CardList/CardListName";

const fillLoading = new Array(6).fill(null);

const PokemonDetail: React.FC = () => {
  const { id, name } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  // Query
  const pokemonDetail = useQuery({
    queryKey: ["getPokemonList", id],
    queryFn: () => getPokemonDetail.getPokemonDetail(Number(id)),
    retry: 0,
  });

  console.log("pokemonDetail =>", pokemonDetail);

  const POKEMON_DETAIL = useMemo(() => {
    if (!pokemonDetail.data && pokemonDetail.isFetching) {
      return (
        <Card className="p-4 flex flex-col bg-red-500 w-full gap-4 rounded-md">
          <Skeleton className="h-[10px] w-[50px] rounded-xl" />
          {fillLoading.map((_: any, index: number) => {
            return (
              <Skeleton className="h-[20px] w-full rounded-xl" key={index} />
            );
          })}
        </Card>
      );
    }

    if (pokemonDetail.data && !pokemonDetail.isFetching) {
      const { data }: { data: any } = pokemonDetail;
      console.log("DATA =>", data);

      return (
        <div className="flex justify-between items-center gap-40">
          <Card className="flex-1 p-4 flex flex-col w-full gap-4 rounded-md stats hover:transform translate-y-0 transition-all duration-200 border-gray-700 border">
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
          </Card>
          <div className="flex-1">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
              alt={data.name}
              loading="lazy"
              onLoad={() => setLoading(false)}
              className={`${!loading ? "block" : "none"} w-full h-full`}
            />
            {loading && (
              <Skeleton className={`h-[200px] w-full rounded-xl block`} />
            )}
          </div>
          <Card className="p-4 flex-1 flex flex-col gap-4 self-stretch border-gray-700 rounded-md border">
            <div>
              <p>Pokemon Name: </p>
              <p>{data.name}</p>
            </div>
            <div>
              <p>Abilities :</p>
              <ol>
                {data?.abilities.map((items: any, index: number) => (
                  <li key={index}>{items.ability.name}</li>
                ))}
              </ol>
            </div>
            <div>
              <p>Types :</p>
              <ol>
                {data?.types.map((items: any, index: number) => (
                  <li key={index}>{items.type.name}</li>
                ))}
              </ol>
            </div>
          </Card>
        </div>
      );
    }
  }, [pokemonDetail]);

  const POKEMON_TRANSFORM = useMemo(() => {
    if (!pokemonDetail.data && pokemonDetail.isFetching) {
      return (
        <div className="flex justify-between items-center">
          <Skeleton className="h-[40px]  w-[80px] rounded-xl" />
          <Skeleton className="h-[40px]  w-[80px] rounded-xl" />
        </div>
      );
    }

    if (pokemonDetail.data && !pokemonDetail.isFetching) {
      const { data }: { data: any } = pokemonDetail;
      return (
        <div className="flex flex-row-reverse">
          {data?.forms &&
            data?.forms?.map((items: any, index: number) => {
              return (
                <Button className="w-fit" key={index} onClick={() => {}}>
                  Go Form {items?.name}
                </Button>
              );
            })}
        </div>
      );
    }
  }, [pokemonDetail]);

  const POKEMON_MOVES = useMemo(() => {
    if (!pokemonDetail.data && pokemonDetail.isFetching) {
      const LoadingSkeleton = new Array(20).fill(null);
      return (
        <Card className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 border-gray-700 border rounded-md">
          {LoadingSkeleton.map((_: any, index: number) => (
            <Skeleton className="h-[125px] w-full rounded-xl" key={index} />
          ))}
        </Card>
      );
    }

    if (pokemonDetail.data && !pokemonDetail.isFetching) {
      const { data }: { data: any } = pokemonDetail;

      return (
        <Card className="border-gray-700 border rounded-md p-4 flex-col gap-4">
          <p className="mb-4">Moves :</p>
          <CardListName results={data.moves} />
        </Card>
      );
    }
  }, [pokemonDetail]);

  const POKEMON_GAMES = useMemo(() => {
    if (!pokemonDetail.data && pokemonDetail.isFetching) {
      const LoadingSkeleton = new Array(20).fill(null);
      return (
        <Card className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 border-gray-700 border rounded-md">
          {LoadingSkeleton.map((_: any, index: number) => (
            <Skeleton className="h-[125px] w-full rounded-xl" key={index} />
          ))}
        </Card>
      );
    }

    if (pokemonDetail.data && !pokemonDetail.isFetching) {
      const { data }: { data: any } = pokemonDetail;

      return (
        <Card className="border-gray-700 border rounded-md p-4 flex-col gap-4">
          <p className="mb-4">Game :</p>
          <CardListName results={data.game_indices} />
        </Card>
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

        <div className="flex flex-col gap-10">
          {/* Detail Pokemon */}
          {POKEMON_DETAIL}

          {/* Pokemon Moves */}
          {POKEMON_MOVES}

          {/* Game Indices */}
          {POKEMON_GAMES}

          {/* To TransForm */}
          {POKEMON_TRANSFORM}
        </div>
      </div>
    </ContainerMenu>
  );
};

export default PokemonDetail;
