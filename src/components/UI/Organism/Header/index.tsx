import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// Components
import SheetSideBar from "components/UI/Molecule/SheetSideBar";
import AvatarUser from "components/UI/Molecule/AvatarUser";
import { Input } from "components/UI/Atoms/Input/input";
import { Label } from "components/UI/Atoms/Label/label";
import { SheetHeader, SheetTitle } from "components/UI/Atoms/Sheet/sheet";
import { Button } from "components/UI/Atoms/Button/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
} from "components/UI/Atoms/Select/select";

// Molecule Components
import SwitchTheme from "components/UI/Molecule/SwitchTheme";

// State
import useStoreLanguage from "state/language";

// Utils
import { NATIONAL_LANGUAGE } from "utils/constant";

const Header = () => {
  const language = useStoreLanguage();
  const navigate = useNavigate();

  return (
    <div className="flex h-full items-center justify-between p-6 z-10">
      <div className="flex-auto flex items-center justify-start gap-4">
        <SheetSideBar
          sheeTrigger={<GiHamburgerMenu size="30" />}
          sheetContent={
            <>
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
            </>
          }
        />

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

        {/* SwitchTheme */}
        <SwitchTheme />

        <SheetSideBar
          sheeTrigger={<AvatarUser />}
          sheetContent={
            <>
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
            </>
          }
        />
      </div>
    </div>
  );
};

export default Header;
