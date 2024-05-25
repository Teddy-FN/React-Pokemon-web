/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

type theme = {
  theme: boolean;
  onChangeTheme: (val: any) => void;
};

const useStoreTheme = create<theme>()(
  devtools(
    persist(
      (set) => ({
        theme: false,
        onChangeTheme: (val: any) => {
          set({ theme: val });
          if (val) {
            document.querySelector("html")?.classList.add("dark");
          } else {
            document.querySelector("html")?.classList.remove("dark");
          }
        },
      }),
      {
        name: "theme",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useStoreTheme;
