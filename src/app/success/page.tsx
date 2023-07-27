"use client";
import { useAppDispatch } from "@/redux/hooks";
import { resetCart } from "@/redux/productSlice/productSlice";
import Link from "next/link";
import React from "react";

const page = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col gap-2 items-center justify-center py-20">
            <h1 className="text-2xl text-hoverBg font-semibold">
                Thank you for shopping in Amazon Sayed
            </h1>
            <Link
                className="text-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300"
                href={"/"}
                onClick={() => dispatch(resetCart())}
            >
                <p>Continue Shopping</p>
            </Link>
        </div>
    );
};

export default page;
