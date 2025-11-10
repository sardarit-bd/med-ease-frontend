import { create } from "zustand";

const useNavIsOpenStore = create((set) => ({
    isOpen: false,
    setisOpen: (open) => set({ isOpen: open }),
}));

export default useNavIsOpenStore;
