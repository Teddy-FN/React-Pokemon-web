import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

// import { Button } from "components/UI/Atoms/Button/button";
import {
  // DrawerClose,
  DrawerDescription,
  // DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "components/UI/Atoms/Drawer/drawer";

// Fetch
import getPokemonDetail from "services/privates-routes/getPokemonDetail";
import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";

const DrawerContentPokemonDetail = ({ id }: { id: number }) => {
  // Query
  const pokemonDetail = useQuery({
    queryKey: ["getPokemonList"],
    queryFn: () => getPokemonDetail.getPokemonDetail(id),
  });

  console.log("pokemonDetail =>", pokemonDetail);

  // img : front_default
  // name : name
  // types : types
  // height : height
  // weight : weight

  const DETAIL_POKEMON = useMemo(() => {
    if (pokemonDetail?.isLoading && !pokemonDetail?.data) {
      return <Skeleton className="h-[350px] w-full rounded-xl" />;
    }

    if (pokemonDetail?.data && pokemonDetail?.isSuccess) {
      const { data }: { data: any } = pokemonDetail;
      return (
        <>
          <DrawerHeader>
            <DrawerTitle className="text-center">{data?.name}</DrawerTitle>
            <DrawerDescription className="text-center">
              Pokemon Detail
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center">
            <div className="flex-1">
              <img
                src={data?.sprites.front_default}
                alt={data?.name}
                className="w-full h-full"
              />
            </div>
            <div className="flex-1 flex-col justify-between">
              <div className="flex gap-4 items-center">
                {data?.types.map((items: any, index: number) => {
                  console.log("ITEMS =>", items);
                  return <p key={index}>{items.type.name}</p>;
                })}
              </div>
              <p>Height : {data?.height}</p>
              <p>Weight : {data?.weight}</p>
            </div>
          </div>
        </>
      );
    }
  }, [pokemonDetail]);

  return <div className="mx-auto w-full md:max-w-sm">{DETAIL_POKEMON}</div>;
};
export default DrawerContentPokemonDetail;
