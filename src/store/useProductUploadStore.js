import { create } from "zustand";

const useProductUploadStore = create((set) => ({

    rander: 1,
    setrander: (rander) => set({ rander }),
    productType: "Simple",
    setproductType: (product) => set({ productType: product }),
    productName: "",
    setproductName: (product) => set({ productName: product }),
    productDescription: "",
    setproductDescription: (product) => set({ productDescription: product }),
    productShortDescription: "",
    setproductShortDescription: (product) => set({ productShortDescription: product }),
    productPrice: 0,
    setproductPrice: (product) => set({ productPrice: product }),
    productofferPrice: 0,
    setproductofferPrice: (product) => set({ productofferPrice: product }),
    productCategory: {},
    setproductCategory: (product) => set({ productCategory: product }),
    productTags: 0,
    setproductTags: (product) => set({ productTags: product }),
    productStatus: false,
    setproductStatus: (product) => set({ productStatus: product }),
    productThumbnail: null,
    setproductThumbnail: (product) => set({ productThumbnail: product }),
    productSingleImage: null,
    setproductSingleImage: (product) => set({ productSingleImage: product }),
    productImages: [],
    setproductImages: (product) => set({ productImages: product }),

    //customizable product layear
    layerBaseCard: [],
    setlayerBaseCard: (product) => set({ layerBaseCard: product }),
    layerSkinTone: [],
    setlayerSkinTone: (product) => set({ layerSkinTone: product }),
    layerHair: [],
    setlayerHair: (product) => set({ layerHair: product }),
    layerNose: [],
    setlayerNose: (product) => set({ layerNose: product }),
    layerEyes: [],
    setlayerEyes: (product) => set({ layerEyes: product }),
    layerMouth: [],
    setlayerMouth: (product) => set({ layerMouth: product }),
    layerDress: [],
    setlayerDress: (product) => set({ layerDress: product }),
    layerCrown: [],
    setlayerCrown: (product) => set({ layerCrown: product }),
    layerBeard: [],
    setlayerBeard: (product) => set({ layerBeard: product }),


    tredingFrontBase: [],
    settredingFrontBase: (product) => set({ tredingFrontBase: product }),
    tredingBackBase: [],
    settredingBackBase: (product) => set({ tredingBackBase: product }),


}));

export default useProductUploadStore;
