import React, { useMemo, useState } from "react";
import { Button } from "components/UI/Atoms/Button/button";
import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";
import { Card } from "components/UI/Atoms/Card/card";
import {
  ScrollArea,
  ScrollBar,
} from "components/UI/Atoms/ScrollArea/scroll-area";

// Loading Skeleton
const LoadingSkeleton = new Array(20).fill(null);

const PokemonList = ({
  data,
  nextPage,
  prevPage,
  page,
}: {
  data: any;
  nextPage: any;
  prevPage: any;
  page: number;
}) => {
  const [loading, setLoading] = useState(true);

  const RENDER_DATA = useMemo(() => {
    if (data?.isLoading) {
      return (
        <div className="flex flex-col gap-8">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {LoadingSkeleton.map(() => (
              <Skeleton className="h-[125px] w-full rounded-xl" />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-[40px]  w-[80px] rounded-xl" />
            <Skeleton className="h-[40px]  w-[80px] rounded-xl" />
          </div>
        </div>
      );
    }

    if (data?.isSuccess && !data?.isError && data?.data) {
      const { results } = data.data;

      return (
        <div className="flex flex-col gap-8">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {results.map((items: any, index: number) => {
              const number = index + 1 + page;
              return (
                <Card className="p-4 bg-white-100 dark:bg-gray-500 border shadow-md flex justify-center items-center flex-col rounded-lg">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
                    alt={items.name}
                    loading="lazy"
                    onLoad={() => setLoading(false)}
                    className={`${!loading ? "block" : "none"}`}
                  />
                  {loading && (
                    <Skeleton className={`h-[125px] w-full rounded-xl block`} />
                  )}

                  <span className="font-semibold dark:text-white">
                    {items.name}
                  </span>
                </Card>
              );
            })}
          </div>
          <div
            className={`flex ${page >= 20 ? "justify-between" : "justify-end"} items-center`}
          >
            {page >= 20 && (
              <Button className="w-fit" onClick={prevPage}>
                Previous
              </Button>
            )}
            <Button className="w-fit" onClick={nextPage}>
              Next
            </Button>
          </div>
        </div>
      );
    }
  }, [data, loading, setLoading]);

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      {RENDER_DATA}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
export default PokemonList;
