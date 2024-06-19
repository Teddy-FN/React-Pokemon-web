/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Card } from "components/UI/Atoms/Card/card";

const CardListName = ({ results }: { results: any }) => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((items: any, index: number) => {
        return (
          <Card
            className="p-4 bg-white-100 dark:bg-gray-500 border shadow-md flex justify-center items-center flex-col rounded-lg min-h-52"
            key={index}
          >
            <span className="font-semibold dark:text-white">
              {items?.name || items?.version?.name || items?.move?.name || "-"}
            </span>
          </Card>
        );
      })}
    </div>
  );
};
export default CardListName;
