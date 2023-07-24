"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../images/slider/sliderImg_1.jpg";
import img2 from "../images/slider/sliderImg_2.jpg";
import img3 from "../images/slider/sliderImg_3.jpg";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                <div>
                    <Image src={img1} alt="slider_img1" />
                </div>
                <div>
                    <Image src={img2} alt="slider_img1" />
                </div>
                <div>
                    <Image src={img3} alt="slider_img1" />
                </div>
            </Carousel>
            <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
        </div>
    );
};

export default Banner;
