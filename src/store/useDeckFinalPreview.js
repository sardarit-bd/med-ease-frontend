import { create } from "zustand";

const useDeckFinalPreview = create((set, get) => ({
    deckcart: [],
    addToCart: (product) => set((state) => ({ deckcart: [...state.deckcart, product] })),

    // Remove item from cart by product id or name
    removeFromCart: (id) =>
        set((state) => ({
            deckcart: state.deckcart.filter((item, index) => item.productId !== id),
        })),


    // Empty the entire cart
    clearCart: () => set({ deckcart: [] }),


}));

export default useDeckFinalPreview;
