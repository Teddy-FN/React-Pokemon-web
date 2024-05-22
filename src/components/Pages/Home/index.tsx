import React from "react";
// import Navigation from "@/components/Pages/Navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "components/UI/Resizable";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "components/UI/Avatar/avatar";

import { Button } from "components/UI/Button/button";
import { Input } from "components/UI/Input/input";
import { Label } from "components/UI/Label/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "components/UI/Sheet/sheet";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/UI/Select/select";

import { Switch } from "components/UI/Switch/switch";

const Home = () => {
  // const user = useStoreUser();

  return (
    <div className="w-full h-screen">
      <ResizablePanelGroup direction="horizontal" className="max-w-full">
        <ResizablePanel defaultSize={4}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={10}>
              <div className="flex h-full items-center justify-between p-6">
                <div className="flex-auto">
                  <Input
                    id="search"
                    value=""
                    className="w-full"
                    placeholder="Search...."
                  />
                </div>
                <div className="flex flex-auto justify-end gap-4 items-center">
                  <div className="hidden md:inline">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Switch id="dark-mode" className="hidden md:inline" />
                  <Sheet>
                    <SheetTrigger asChild>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button type="submit">Save changes</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
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
