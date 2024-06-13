import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "components/UI/Atoms/Select/select";
import { Button } from "components/UI/Atoms/Button/button";
import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";
import { Card } from "components/UI/Atoms/Card/card";
import {
  ScrollArea,
  ScrollBar,
} from "components/UI/Atoms/ScrollArea/scroll-area";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "components/UI/Atoms/Drawer/drawer";

import DrawerContentPokemonDetail from "components/UI/Molecule/DrawerContentPokemonDetail";

// Utils
import { selectCountPokemon } from "utils/constant";

const PokemonList = ({
  data,
  nextPage,
  prevPage,
  page,
  offset,
  handleChangeOffset,
}: {
  data: any;
  nextPage: any;
  prevPage: any;
  page: number;
  offset: number;
  handleChangeOffset: any;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonId, setPokemonId] = useState<number>(0);
  const { t } = useTranslation();

  const translation = useMemo(
    () => ({
      previous: t("translation:previous"),
      next: t("translation:next"),
      selectPokemon: t("translation:selectPokemon"),
    }),
    [t],
  );

  const RENDER_DATA = useMemo(() => {
    if (data?.isLoading) {
      const LoadingSkeleton = new Array(Number(offset)).fill(null);
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
          <div className="flex justify-end">
            <Select
              onValueChange={handleChangeOffset}
              value={offset.toString()}
            >
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select Count Pokemon" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{translation.selectPokemon}</SelectLabel>
                  {selectCountPokemon.map((items: number, index: number) => (
                    <SelectItem value={items.toString()} key={index}>
                      {items}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {results.map((items: any, index: number) => {
              const number = index + 1 + page;
              return (
                <DrawerTrigger asChild onClick={() => setPokemonId(number)}>
                  <Card
                    className="p-4 bg-white-100 dark:bg-gray-500 border shadow-md flex justify-center items-center flex-col rounded-lg min-h-52"
                    key={index}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
                      alt={items.name}
                      loading="lazy"
                      onLoad={() => setLoading(false)}
                      className={`${!loading ? "block" : "none"} w-full h-full`}
                    />
                    {loading && (
                      <Skeleton
                        className={`h-[200px] w-full rounded-xl block`}
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
                {translation.previous}
              </Button>
            )}
            {next && (
              <Button className="w-fit" onClick={nextPage}>
                {translation.next}
              </Button>
            )}
          </div>
        </div>
      );
    }
  }, [
    data,
    offset,
    handleChangeOffset,
    loading,
    translation,
    setLoading,
    setPokemonId,
  ]);

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      {/* Drawer */}
      <Drawer>
        {RENDER_DATA}
        <DrawerContent>
          <DrawerContentPokemonDetail id={pokemonId} />
        </DrawerContent>
      </Drawer>

      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
export default PokemonList;
