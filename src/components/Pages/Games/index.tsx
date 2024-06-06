import React from "react";
import { useQuery } from "@tanstack/react-query";
import ContainerMenu from "components/UI/Organism/ContainerMenu";

// Atoms
import {
  ScrollArea,
  ScrollBar,
} from "components/UI/Atoms/ScrollArea/scroll-area";

import GamesList from "components/UI/Organism/GamesList";

// Fetch
import getPokemonGamesList from "services/privates-routes/getPokemonGamesList";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

const Games = () => {
  const getGames = useQuery({
    queryKey: ["getGames"],
    queryFn: () => getPokemonGamesList.getPokemonGameList(),
  });

  return (
    <ContainerMenu>
      <ScrollArea className="w-full overflow-y-auto p-4">
        <div className="max-w-full flex max-h-fit gap-10">
          {works.map((artwork) => (
            <div className="flex border border-slate-600 rounded-xl justify-between p-6 w-max">
              <div className="flex flex-col gap-4 flex-1">
                <p className="text-lg font-bold">Pokemon :</p>
                <p className="text-md">{artwork.artist}</p>
              </div>
              <div className="flex-1">
                <img
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="w-full h-full object-cover"
                  width="100%"
                />
              </div>
            </div>
          ))}
          <ScrollBar orientation="horizontal" />
        </div>
      </ScrollArea>
      <div className="p-4">
        <GamesList data={getGames} />
      </div>
    </ContainerMenu>
  );
};
export default Games;
