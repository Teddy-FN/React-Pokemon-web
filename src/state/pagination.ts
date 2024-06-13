/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

type paginationPokemonList = {
  next: number;
  offset: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleResetNext: () => void;
  handleChangeOffet: (numb: number) => void;
};

const userStorePagination = create<paginationPokemonList>()(
  devtools(
    persist(
      (set, get) => ({
        next: 0,
        offset: 20,
        handleNext: () => {
          set({ next: get().next + 20 });
        },
        handlePrev: () => {
          set({ next: get().next - 20 });
        },
        handleResetNext: () => {
          set({ next: 0, offset: 20 });
        },
        handleChangeOffet: (numb) => {
          console.log(numb);
          set({
            offset: numb,
          });
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
