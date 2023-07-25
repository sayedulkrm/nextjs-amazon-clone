"use client";
import { IReduxProductData } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface IReduxPropsState {
    productData: IReduxProductData[];
    favoriteData: IReduxProductData[];
    allProducts: IReduxProductData[];
    userInfo: null | string;
}

const initialState: IReduxPropsState = {
    productData: [],
    favoriteData: [],
    allProducts: [],
    userInfo: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.productData.find(
                (item: IReduxProductData) => item._id === action.payload._id
            );

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },

        addToFavorite: (state, action) => {
            const existingProduct = state.favoriteData.find(
                (item: IReduxProductData) => item._id === action.payload._id
            );

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.favoriteData.push(action.payload);
            }
        },

        increaseQuantity: (state, action) => {
            const existingProduct = state.favoriteData.find(
                (item: IReduxProductData) => item._id === action.payload._id
            );

            existingProduct && existingProduct.quantity++;
        },

        decreaseQuantity: (state, action) => {
            const existingProduct = state.favoriteData.find(
                (item: IReduxProductData) => item._id === action.payload._id
            );

            if (existingProduct?.quantity === 1) {
                existingProduct.quantity = 1;
            } else {
                existingProduct!.quantity--;
            }
        },

        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },

        removeUser: (state) => {
            state.userInfo = null;
        },

        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
    },
});

export const {
    addToCart,
    addToFavorite,
    addUser,
    removeUser,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    resetCart,
    setAllProducts,
} = productSlice.actions;

export default productSlice.reducer;
