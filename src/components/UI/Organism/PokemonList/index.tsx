import React, { useMemo } from "react";

import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";
import { Card } from "components/UI/Atoms/Card/card";
import {
  ScrollArea,
  ScrollBar,
} from "components/UI/Atoms/ScrollArea/scroll-area";

const LoadingSkeleton = new Array(20).fill(null);

const PokemonList = ({ data }: { data: any }) => {
  console.log("data =>", data);
  console.log("LoadingSkeleton =>", LoadingSkeleton);

  const RENDER_DATA = useMemo(() => {
    if (data?.isLoading) {
      return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {LoadingSkeleton.map(() => (
            <Skeleton className="h-[125px] w-full rounded-xl" />
          ))}
        </div>
      );
    }

    if (data?.isSuccess && !data?.isError && data?.data) {
      const { results } = data.data;
      return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {results.map((items: any, index: number) => (
            <Card className="p-4 bg-white-100 dark:bg-gray-500 border shadow-md flex justify-center items-center flex-col rounded-lg">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                alt={items.name}
              />
              <span className="font-semibold dark:text-white">
                {items.name}
              </span>
            </Card>
          ))}
        </div>
      );
    }
  }, [data]);

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      {RENDER_DATA}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
export default PokemonList;
