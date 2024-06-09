import React, { useMemo, useState } from "react";
import { Button } from "components/UI/Atoms/Button/button";
import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";
import { Card } from "components/UI/Atoms/Card/card";
import {
  ScrollArea,
  ScrollBar,
} from "components/UI/Atoms/ScrollArea/scroll-area";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "components/UI/Atoms/Drawer/drawer";

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
            {LoadingSkeleton.map((_: any, index: number) => (
              <Skeleton className="h-[125px] w-full rounded-xl" key={index} />
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
      const { results, next, previous } = data.data;

      return (
        <div className="flex flex-col gap-8">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {results.map((items: any, index: number) => {
              const number = index + 1 + page;
              return (
                <DrawerTrigger asChild>
                  <Card
                    className="p-4 bg-white-100 dark:bg-gray-500 border shadow-md flex justify-center items-center flex-col rounded-lg min-h-52"
                    key={index}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
                      alt={items.name}
                      loading="lazy"
                      onLoad={() => setLoading(false)}
                      className={`${!loading ? "block" : "none"}`}
                    />
                    {loading && (
                      <Skeleton
                        className={`h-[125px] w-full rounded-xl block`}
                      />
                    )}

                    <span className="font-semibold dark:text-white">
                      {items.name}
                    </span>
                  </Card>
                </DrawerTrigger>
              );
            })}
          </div>
          <div
            className={`flex ${page >= 20 ? "justify-between" : "justify-end"} items-center`}
          >
            {page >= 20 && previous && (
              <Button className="w-fit" onClick={prevPage}>
                Previous
              </Button>
            )}
            {next && (
              <Button className="w-fit" onClick={nextPage}>
                Next
              </Button>
            )}
          </div>
        </div>
      );
    }
  }, [data, loading, setLoading]);

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      {/* Drawer */}
      <Drawer>
        {RENDER_DATA}
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                >
                  {/* <MinusIcon className="h-4 w-4" /> */}
                  <span className="sr-only">Decrease</span>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                >
                  {/* <PlusIcon className="h-4 w-4" /> */}
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[120px]">HELO</div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
export default PokemonList;
