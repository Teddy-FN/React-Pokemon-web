import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "components/UI/Atoms/Sheet/sheet";

const SheetSideBar = ({
  sheeTrigger,
  sheetContent,
  side,
  classname,
}: {
  sheeTrigger: any;
  sheetContent: any;
  side: any;
  classname: string;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild className={classname}>
        {sheeTrigger}
      </SheetTrigger>
      <SheetContent side={side}>{sheetContent}</SheetContent>
    </Sheet>
  );
};

export default SheetSideBar;
