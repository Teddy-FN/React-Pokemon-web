/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

type user = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  onchangeInput: (val: any, type: any) => void;
  // changeTab: () => void;
};

const useStoreUser = create<user>()(
  devtools(
    persist(
      (set) => ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        onchangeInput: (props: any, type: string) => {
          if (type === "email") {
            set({ email: props });
          }

          if (type === "password") {
            set({ password: props });
          }

          if (type === "firstName") {
            set({ firstName: props });
          }

          if (type === "lastName") {
            set({ lastName: props });
          }
        },
        // changeTab: () => {
        //   set({ email: "", firstName: "", lastName: "", password: "" });
        //   localStorage.removeItem("user-storage");
        // },
      }),
      {
        name: "user-storage",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useStoreUser;
