import React, { Suspense } from "react";
import ProductLoader from "@/components/Loader/ProductLoader";
import Products from "@/components/Products";
import Link from "next/link";

const page = () => {
    return (
        <div className="min-h-screen w-full">
            <Suspense fallback={<ProductLoader />}>
                <Products />
            </Suspense>
        </div>
    );
};

export default page;
