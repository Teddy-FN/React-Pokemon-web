import React from "react";
import { useNavigate } from "react-router-dom";

// Components
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
import { Input } from "components/UI/Input/input";
import { Label } from "components/UI/Label/label";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "components/UI/Sheet/sheet";
import { Button } from "components/UI/Button/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
} from "components/UI/Select/select";
import { Switch } from "components/UI/Switch/switch";

// Icons
import { GiSun, GiMoon } from "react-icons/gi";

// State
import useStoreLanguage from "state/language";
import useStoreTheme from "state/theme";

// Utils
import { NATIONAL_LANGUAGE } from "utils/constant";

const Home = () => {
  const language = useStoreLanguage();
  const theme = useStoreTheme();
  const navigate = useNavigate();

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
              <div className="flex h-full items-center justify-between p-6 z-10">
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
                    <Select
                      onValueChange={(e) => language.onchangeValue(e)}
                      value={localStorage.getItem("i18nextLng")}
                    >
                      <SelectTrigger className="w-fit border-hidden">
                        {NATIONAL_LANGUAGE?.filter(
                          (items) => items.value === language.value,
                        )?.map((items) => (
                          <img
                            src={items.img}
                            alt={items.name}
                            className="max-w-6 max-h-6"
                          />
                        ))}
                      </SelectTrigger>
                      <SelectContent
                        className="min-w-2 z-50"
                        defaultValue={
                          NATIONAL_LANGUAGE?.filter(
                            (items) => items.value === language.value,
                          )?.map((items) => items.value)[0]
                        }
                      >
                        <SelectGroup>
                          <SelectLabel>Select Language</SelectLabel>
                          {NATIONAL_LANGUAGE.map((items) => (
                            <SelectItem
                              value={items.value || language.value}
                              className="w-full flex items-center"
                            >
                              <div className="flex justify-between items-center gap-4">
                                <img
                                  src={items.img}
                                  alt={items.name}
                                  className="max-w-6 max-h-6"
                                />
                                <p>{items.name}</p>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="hidden md:flex md:justify-between md:items-center md:gap-4">
                    <GiSun
                      size="20"
                      fill={!theme.theme ? "#ffa700" : "	#e5e5e5"}
                      color={!theme.theme ? "#ffa700" : "	#e5e5e5"}
                    />
                    <Switch
                      id="dark-mode"
                      checked={theme.theme}
                      onCheckedChange={theme.onChangeTheme}
                    />
                    <GiMoon
                      size="20"
                      fill={theme.theme ? "#b18930" : "	#e5e5e5"}
                      color={theme.theme ? "#b18930" : "	#e5e5e5"}
                    />
                  </div>

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
                        <SheetTitle>Hello 👋🏻</SheetTitle>
                        {/* <SheetDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </SheetDescription> */}
                        <Button
                          className="w-full relative gap-2 bg-white"
                          variant="outline"
                          onClick={() => navigate("/login")}
                        >
                          <p className="text-black">Login</p>
                        </Button>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 items-center gap-4 md:hidden">
                          <Label htmlFor="username">Language :</Label>
                          <Select
                            onValueChange={(e) => language.onchangeValue(e)}
                            value={localStorage.getItem("i18nextLng")}
                          >
                            <SelectTrigger className="w-full border-hidden">
                              {NATIONAL_LANGUAGE?.filter(
                                (items) => items.value === language.value,
                              )?.map((items) => (
                                <div className="w-full flex gap-4 items-center">
                                  <img
                                    src={items.img}
                                    alt={items.name}
                                    className="max-w-6 max-h-6"
                                  />
                                  <p>{items.name}</p>
                                </div>
                              ))}
                            </SelectTrigger>
                            <SelectContent
                              className="min-w-2 z-50"
                              defaultValue={
                                NATIONAL_LANGUAGE?.filter(
                                  (items) => items.value === language.value,
                                )?.map((items) => items.value)[0]
                              }
                            >
                              <SelectGroup>
                                <SelectLabel>Select Language</SelectLabel>
                                {NATIONAL_LANGUAGE.map((items) => (
                                  <SelectItem
                                    value={items.value || language.value}
                                    className="w-full"
                                  >
                                    <div className="flex justify-between items-center gap-4">
                                      <img
                                        src={items.img}
                                        alt={items.name}
                                        className="max-w-6 max-h-6 text-center"
                                      />
                                      <p>{items.name}</p>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
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
