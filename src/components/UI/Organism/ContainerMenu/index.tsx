import React from "react";

// Components
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "components/UI/Atoms/Resizable";

// Organism Component
import SideBar from "components/UI/Organism/Sidebar";
import Header from "components/UI/Organism/Header";

const ContainerMenu = ({ children }: { children: any }) => {
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
            >
              {children}
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ContainerMenu;
