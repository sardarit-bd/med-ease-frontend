import { create } from "zustand";

const usedeshboardsidebercontroller = create((set) => ({
    isSideberOpen: false,
    setisSideberOpen: (open) => set({ isSideberOpen: open }),
}));

export default usedeshboardsidebercontroller;
