import { create } from "zustand";

const useAuthStore = create((set) => ({

    isopenActionForm: false,
    setisopenActionForm: (open) => set({ isopenActionForm: open }),

    issignin: true,
    setissignin: (ins) => set({ issignin: ins }),

    issignup: false,
    setissignup: (ups) => set({ issignup: ups }),

    isforgot: false,
    setisforgot: (forgot) => set({ isforgot: forgot }),


    isLoading: false,
    setisLoading: (loading) => set({ isLoading: loading }),

}));

export default useAuthStore;

