import { create } from "zustand";

const useLogedUserStore = create((set) => ({
    loginUser: {},
    setLoginUser: (user) => set({ loginUser: user }),
}));

export default useLogedUserStore;
