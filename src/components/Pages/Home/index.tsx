import React from "react";
import { useQuery } from "@tanstack/react-query";

// Components
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "components/UI/Atoms/Resizable";

// Organism Component
import SideBar from "components/UI/Organism/Sidebar";
import Header from "components/UI/Organism/Header";
import PokemonList from "components/UI/Organism/PokemonList";

// State
import userStorePagination from "state/pagination";

// Import Fetch
import getPokemonList from "services/privates-routes/getPokemonList";

const Home = () => {
  const pagination = userStorePagination();

  const queryPokemon = useQuery({
    queryKey: ["getPokemonList", pagination.next],
    queryFn: () => getPokemonList.getPokemonList(pagination.next),
  });

  return (
    <div className="w-full h-screen ">
      <ResizablePanelGroup direction="horizontal" className="max-w-full">
        <ResizablePanel defaultSize={4} className="hidden md:inline">
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={10}>
              <Header />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={90}
              style={{
                overflow: "scroll",
              }}
              className="p-4"
            >
              <PokemonList
                data={queryPokemon}
                nextPage={() => pagination.handleNext()}
                prevPage={() => pagination.handlePrev()}
                page={pagination.next}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Home;
