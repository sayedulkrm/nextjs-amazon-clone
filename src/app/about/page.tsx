import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="flex flex-col">
            About Page
            <Link href={"/"}> Go To home</Link>
        </div>
    );
};

export default page;
