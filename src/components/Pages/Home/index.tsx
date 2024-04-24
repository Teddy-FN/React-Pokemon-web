import React from "react";
// import Navigation from "@/components/Pages/Navigation";
// import Menu from "../Menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../ui/Resizable";

// import MainMenu from "../Main/MainMenu";
// import { Routes, Route } from "react-router-dom";
// import Store from "../Store";
// import BottomMenu from "../BottomMenu";
// import PokemonPages from "../PokemonPages";

{
  /* <ResizablePanelGroup
direction="horizontal"
className="max-w-md rounded-lg border"
>
<ResizablePanel defaultSize={50}>
  <div className="flex h-[200px] items-center justify-center p-6">
    <span className="font-semibold">One</span>
  </div>
</ResizablePanel>
<ResizableHandle />
<ResizablePanel defaultSize={50}>
  <ResizablePanelGroup direction="vertical">
    <ResizablePanel defaultSize={25}>
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">Two</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={75}>
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">Three</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</ResizablePanel>
</ResizablePanelGroup> */
}

const Home = () => {
  return (
    <div className="w-full h-screen">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-full"
      >
        <ResizablePanel defaultSize={4}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={10}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={90}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Home;
