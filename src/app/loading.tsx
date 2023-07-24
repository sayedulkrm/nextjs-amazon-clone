"use client";
import React from "react";

import { Triangle } from "react-loader-spinner";

const loading = () => {
    return (
        <div className="flex justify-center items-center h-[90vh]">
            <Triangle
                height="100"
                width="100"
                color="#f2ff00"
                ariaLabel="triangle-loading"
                visible={true}
            />
        </div>
    );
};

export default loading;
