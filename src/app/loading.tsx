"use client";
import React from "react";

import { Dna } from "react-loader-spinner";

const loading = () => {
    return (
        <div className="flex justify-center items-center h-[90vh]">
            <Dna
                height="100"
                width="100"
                ariaLabel="triangle-loading"
                visible={true}
            />
        </div>
    );
};

export default loading;
