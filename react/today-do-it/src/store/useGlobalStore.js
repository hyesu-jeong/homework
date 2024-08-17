import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  // theme: "light",
  // toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  // setTheme: (theme) => set({ theme }),
  // getTheme: () => set((state) => ({ theme: state.theme })),
  date: new Date(),
  setDate: (date) => set({ date }),

  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),

  textValue: "",
  setTextValue: (textValue) => set({ textValue }),

  textAreaValue: "",
  setTextAreaValue: (textAreaValue) => set({ textAreaValue }),

  list: [],
  setList: (list) => set({ list }),

  todo: [],
  setTodo: (todo) => set({ todo }),

  done: [],
  setDone: (done) => set({ done }),

  archived: [],
  setArchived: (archived) => set({ archived }),

  currentTab: "all",
  setCurrentTab: (currentTab) => set({ currentTab }),
}));
