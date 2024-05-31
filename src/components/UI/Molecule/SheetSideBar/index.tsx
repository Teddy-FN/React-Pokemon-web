import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "components/UI/Atoms/Sheet/sheet";

const SheetSideBar = ({
  sheeTrigger,
  sheetContent,
}: {
  sheeTrigger: any;
  sheetContent: any;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        {sheeTrigger}
      </SheetTrigger>
      <SheetContent side="left">{sheetContent}</SheetContent>
    </Sheet>
  );
};

export default SheetSideBar;
