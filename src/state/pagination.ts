/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

type paginationPokemonList = {
  next: number;
  handleNext: () => void;
  handlePrev: () => void;
};

const userStorePagination = create<paginationPokemonList>()(
  devtools(
    persist(
      (set, get) => ({
        next: 0,
        handleNext: () => {
          console.log("WASSUP");
          set({ next: get().next + 20 });
        },
        handlePrev: () => {
          set({ next: get().next - 20 });
        },
      }),
      {
        name: "pagination-pokemon-list",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default userStorePagination;
