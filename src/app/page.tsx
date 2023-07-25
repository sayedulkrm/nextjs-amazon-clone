import React, { Suspense } from "react";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import ProductLoader from "@/components/Loader/ProductLoader";

const page = () => {
    return (
        <main>
            <div className="max-w-screen-2xl mx-auto min-h-screen">
                <Banner />
                <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 mb-10 z-20">
                    <Products />
                </div>
            </div>
        </main>
    );
};

export default page;
