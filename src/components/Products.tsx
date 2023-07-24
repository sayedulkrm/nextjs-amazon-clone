import React, { useEffect, useState } from "react";
import { getServerSideProps } from "@/utils";
import { IProductData } from "@/types";

const Products = async () => {
    const productData: IProductData[] = await getServerSideProps();

    return (
        <div>
            {productData.map((item) => (
                <h1>Title: {item.title}</h1>
            ))}
        </div>
    );
};

export default Products;
