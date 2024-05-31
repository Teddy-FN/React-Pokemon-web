import React from "react";
import { useQuery } from "@tanstack/react-query";

// Components
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "components/UI/Atoms/Resizable";

// Organism Component
import Header from "components/UI/Organism/Header";
import PokemonList from "components/UI/Organism/PokemonList";

// Import Fetch
import getPokemonList from "services/privates-routes/getPokemonList";

const Home = () => {
  const queryPokemon = useQuery({
    queryKey: ["getPokemonList"],
    queryFn: () => getPokemonList.getPokemonList(),
  });
  console.log("queryPokemon =>", queryPokemon);

  return (
    <div className="w-full h-screen ">
      <ResizablePanelGroup direction="horizontal" className="max-w-full">
        <ResizablePanel defaultSize={4} className="hidden md:inline">
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={10}>
              <Header />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={90}>
              <PokemonList data={queryPokemon} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Home;
