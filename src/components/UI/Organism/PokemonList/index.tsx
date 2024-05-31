import React, { useMemo } from "react";

import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";
import { Card } from "components/UI/Atoms/Card/card";
import { ScrollArea } from "components/UI/Atoms/ScrollArea/scroll-area";

const LoadingSkeleton = new Array(20).fill(null);

const PokemonList = ({ data }: { data: any }) => {
  console.log("data =>", data);
  console.log("LoadingSkeleton =>", LoadingSkeleton);

  const RENDER_DATA = useMemo(() => {
    if (data?.isLoading) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {LoadingSkeleton.map(() => (
            <Skeleton className="h-[125px] w-full rounded-xl" />
          ))}
        </div>
      );
    }

    if (data?.isSuccess && !data?.isError && data?.data) {
      const { results } = data.data;
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {results.map((items: any) => (
            <Card>{items.name}</Card>
          ))}
        </div>
      );
    }
  }, [data]);

  return <ScrollArea>{RENDER_DATA}</ScrollArea>;
};
export default PokemonList;
