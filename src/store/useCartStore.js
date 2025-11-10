import { create } from "zustand";

const useCartStore = create((set, get) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),

    // Remove item from cart by product id or name
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item, index) => item.id !== id),
        })),




    // Increase quantity
    increaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id
                    ? { ...item, productQuantity: item.productQuantity + 1 }
                    : item
            ),
        })),





    // Decrease quantity
    decreaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id && item.productQuantity > 1
                    ? { ...item, productQuantity: item.productQuantity - 1 }
                    : item
            ),
        })),


}));

export default useCartStore;
