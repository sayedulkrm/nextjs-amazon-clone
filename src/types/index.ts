import { ReactElement } from "react";

export interface IProps {
    children: ReactElement;
}

export interface IProductData {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    description: string;
    category: string;
    image: string;
    brand: string;
}
