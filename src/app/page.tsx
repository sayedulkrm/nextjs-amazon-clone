import React from "react";
import Banner from "@/components/Banner";
import Products from "@/components/Products";

const Home = () => {
    return (
        <main>
            <div className="max-w-screen-2xl mx-auto">
                <Banner />
                <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 mb-10">
                    <Products />
                </div>
            </div>
        </main>
    );
};

export default Home;
