/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

type language = {
  value: string;
  onchangeValue: (val: any) => void;
};

const useStoreLanguage = create<language>()(
  devtools(
    persist(
      (set) => ({
        value: "en",
        onchangeValue: (props: any) => {
          set({ value: props });
        },
      }),
      {
        name: "language",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useStoreLanguage;
