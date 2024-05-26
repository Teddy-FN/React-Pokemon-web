import React from "react";
import { GiSun, GiMoon } from "react-icons/gi";

// Components
import { Switch } from "components/UI/Atoms/Switch/switch";

// State
import useStoreTheme from "state/theme";

const SwitchTheme = () => {
  const theme = useStoreTheme();

  return (
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
  );
};

export default SwitchTheme;
