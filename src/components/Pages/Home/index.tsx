import React from "react";

// Components
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "components/UI/Atoms/Resizable";

// Organism Component
import Header from "components/UI/Organism/Header";

const Home = () => {
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
              <div className="flex h-full items-center justify-center p-6 -z-1">
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
