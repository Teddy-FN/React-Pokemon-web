/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from "react";
import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";
import {
  ScrollArea,
  ScrollBar,
} from "components/UI/Atoms/ScrollArea/scroll-area";

import CardListName from "components/UI/Molecule/CardList/CardListName";

// Loading Skeleton
const LoadingSkeleton = new Array(20).fill(null);

const GamesList = ({ data }: { data: any }) => {
  const [loading, setLoading] = useState(true);

  const RENDER_DATA = useMemo(() => {
    if (data?.isLoading) {
      return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {LoadingSkeleton.map((_: any, index: number) => (
            <Skeleton className="min-h-52 w-full rounded-xl" key={index} />
          ))}
        </div>
      );
    }

    if (data?.isSuccess && !data?.isError && data?.data) {
      const { results } = data.data;

      return <CardListName results={results} />;
    }
  }, [data, loading, setLoading]);

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      {RENDER_DATA}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
export default GamesList;
