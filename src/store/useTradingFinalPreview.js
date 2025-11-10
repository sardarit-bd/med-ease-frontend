import { create } from "zustand";

const useTradingFinalPreview = create((set, get) => ({
    tradingcart: [],
    addToCart: (product) => set((state) => ({ tradingcart: [...state.tradingcart, product] })),

    // Remove item from cart by product id or name
    removeFromCart: (id) =>
        set((state) => ({
            tradingcart: state.tradingcart.filter((item, index) => item.productId !== id),
        })),




    // Empty the entire cart
    clearCart: () => set({ tradingcart: [] }),

}));

export default useTradingFinalPreview;
