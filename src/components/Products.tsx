"use client";
import React, { Suspense, useEffect, useState } from "react";
import { getServerSideProps } from "@/utils";
import { IProductData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "./FormattedPrice";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart, addToFavorite } from "@/redux/productSlice/productSlice";
import ProductLoader from "./Loader/ProductLoader";

interface ProductCardProps {
    item: IProductData;
}

const ProductCard = ({ item }: ProductCardProps) => {
    const dispatch = useAppDispatch();

    const HandleAddToCart = (itemDetails: any) => {
        dispatch(addToCart({ ...itemDetails, quantity: 1 }));
    };

    const HandleAddToFavorite = (itemDetails: any) => {
        dispatch(addToFavorite({ ...itemDetails, quantity: 1 }));
    };

    return (
        <div
            key={item._id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
        >
            <div className="w-full h-[260px] relative">
                <Link
                    href={{
                        pathname: `/${item._id}`,
                        query: {
                            _id: item._id,
                            brand: item.brand,
                            category: item.category,
                            description: item.description,
                            image: item.image,
                            isNew: item.isNew,
                            oldPrice: item.oldPrice,
                            price: item.price,
                            title: item.title,
                        },
                    }}
                >
                    <Image
                        className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                        width={300}
                        height={300}
                        src={item.image}
                        alt="productImage"
                    />
                </Link>
                <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                    <span
                        onClick={() => HandleAddToCart(item)}
                        className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
                    >
                        <HiShoppingCart />
                    </span>
                    <span
                        onClick={() => HandleAddToFavorite(item)}
                        className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
                    >
                        <FaHeart />
                    </span>
                </div>
                {item.isNew && (
                    <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                        !save
                        <FormattedPrice amount={item.oldPrice - item.price} />
                    </p>
                )}
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
                <p className="text-xs text-gray-500 tracking-wide">
                    {item.category}
                </p>
                <p className="text-base font-medium">{item.title}</p>
                <p className="flex items-center gap-2">
                    <span className="text-sm line-through">
                        <FormattedPrice amount={item.oldPrice} />
                    </span>
                    <span className="text-amazon_blue font-semibold">
                        <FormattedPrice amount={item.price} />
                    </span>
                </p>
                <p className="text-xs text-gray-600 text-justify">
                    {item.description.substring(0, 120)}
                </p>
                <button
                    onClick={() => HandleAddToCart(item)}
                    className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

const Products = () => {
    // const productData: IProductData[] = await getServerSideProps();

    const [productData, setProductData] = useState<IProductData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const data: IProductData[] = await getServerSideProps();
                setProductData(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching product data:", error);
                setIsLoading(false);
            }
        };

        fetchProductData();
    }, []);

    if (isLoading) {
        return <ProductLoader />;
    }

    return (
        <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {productData?.map((item) => (
                <ProductCard item={item} key={item._id} />
            ))}
        </div>
    );
};

export default Products;
