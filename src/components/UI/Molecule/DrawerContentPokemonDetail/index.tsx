/* eslint-disable no-unused-vars */
import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Atoms Components
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "components/UI/Atoms/Drawer/drawer";
import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";
import { Button } from "components/UI/Atoms/Button/button";

// Fetching
import getPokemonDetail from "services/privates-routes/getPokemonDetail";

// Utils
import { backgroundColoring } from "utils/constant";

const DrawerContentPokemonDetail = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const translation = useMemo(
    () => ({
      titleDrawerDetailPokemon: t("translation:titleDrawerDetailPokemon"),
      weight: t("translation:weight"),
      height: t("translation:height"),
      seeDetail: t("translation:seeDetail"),
    }),
    [t],
  );

  // Query
  const pokemonDetail = useQuery({
    queryKey: ["getPokemonList"],
    queryFn: () => getPokemonDetail.getPokemonDetail(id),
    retry: 0,
  });

  const DETAIL_POKEMON = useMemo(() => {
    if (pokemonDetail?.isLoading || pokemonDetail.isRefetching) {
      return <Skeleton className="h-[500px] md:h-[350px] w-full rounded-xl" />;
    }

    if (pokemonDetail?.data && pokemonDetail?.isSuccess) {
      const { data }: { data: any } = pokemonDetail;
      return (
        <React.Fragment>
          <DrawerHeader>
            <DrawerTitle className="text-center">{data?.name}</DrawerTitle>
            <DrawerDescription className="text-center">
              {translation.titleDrawerDetailPokemon}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center flex-col md:flex-row">
            <div className="flex-1 flex justify-center">
              <img
                src={data?.sprites.front_default}
                alt={data?.name}
                className="w-full h-full"
              />
            </div>
            <div className="flex-1 flex gap-4 flex-col mb-8 md:mb-0">
              <div className="flex gap-4 items-center justify-center md:justify-start">
                {data?.types.map((items: any, index: number) => {
                  const filteringColor = Object.entries(
                    backgroundColoring,
                  ).filter(
                    ([key, _]: [string, any]) => key === items?.type.name,
                  )[0];
                  const [_, hexColor] = filteringColor;
                  return (
                    <p
                      key={index}
                      className="py-2 px-4 rounded-[50px] font-bold text-lg text-white"
                      style={{
                        backgroundColor: `${hexColor}`,
                      }}
                    >
                      {items.type.name}
                    </p>
                  );
                })}
              </div>
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <p>
                  {translation.height} : {data?.height}
                </p>
                <p>
                  {translation.weight} : {data?.weight}
                </p>
              </div>
              <Button
                className="mx-10 md:mx-0"
                onClick={() => navigate(`/pokemon/${data?.name}/${data?.id}`)}
              >
                {translation.seeDetail}
              </Button>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }, [pokemonDetail]);

  return (
    <div className="mx-auto w-full md:max-w-sm overflow-auto">
      {DETAIL_POKEMON}
    </div>
  );
};
export default DrawerContentPokemonDetail;
