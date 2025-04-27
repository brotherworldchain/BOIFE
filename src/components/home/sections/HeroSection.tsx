/** @format */

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { Header1, Paragraph3, ParagraphLink1 } from "@/components/Text";
import Link from "next/link";
import ElevatingBrands from "./others/ElevatingBrands";
import AOS from "aos";

const HomePage = () => {

   useEffect(() => {
      AOS.init({
        duration: 1000,
      });
   }, []);
  
  const imageUrls = [
    "https://res.cloudinary.com/dvao98wnj/image/upload/v1738849472/lagos-pic-13_nc3jec.jpg",
    "https://res.cloudinary.com/dvao98wnj/image/upload/v1738849472/385327d1_edited_a943_1_nhssvp.webp",
    "https://res.cloudinary.com/dvao98wnj/image/upload/v1738849472/lagos-pic-13_nc3jec.jpg",
  ];


  return (
    <div
      id="home"
      className="sm:pt-[50px] uppercase relative - pt-[100px] - bg-gradient-to-b from-secondary via-secondary/120 to-primary"
      style={{
        // height: "140vh",
        background:
          "linear-gradient(to right, #fc8e03 10%, #fc8e03 40%, #ffd302 100%)",
      }}
    >
      <img
        src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1745725334/IMG_1965_vjikl9.png"
        className=" absolute sm:-bottom-[300px] bottom-0"
        alt=""
      />

      <div className=" text-white   " data-aos="zoom-in-up">
        <div className="flex flex-col items-center justify-center py-2 container1 ">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <img src="/images/logo2.png" alt="" className=" h-[150px] " />
              <h1 className=" text-[red] text-[50px] sm:text-[150px] font-bold">
                Boife
              </h1>
            </div>

            <Paragraph3 className="mt-6">MORE THAN ORDINARY [DOG]</Paragraph3>
          </div>
        </div>
      </div>
      <div></div>

      <ElevatingBrands />
    </div>
  );
};

export default HomePage;
