"use client";

import Button from "@/components/Button";
import { Header1Plus, Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function section6() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div
      className=" bg-[#28443F]"
      style={{
        // height: "140vh",
        background:
          "linear-gradient(to bottom, #ff5c01 10%, #fc8e03 40%, #fc8e03 100%)",
      }}
    >
      <div
        className=" container1 pt-[24px] sm:py-[80px] text-p_black"
        data-aos="fade-up"
      >
        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-[24px]">
          {" "}
          <div className=" flex justify-center">
            <img src="/images/logo2.png" alt="" />
          </div>{" "}
          <div>
            {" "}
            <div className="flex flex-col items-center text-center xl:gap-[24px] text-white w-full pb-[64px]">
              <Header1Plus>
                <span className="text-l_green">Together</span>, let's fuel the
                rise of the $BONKIN revolution!
              </Header1Plus>
              <Paragraph1 className="max-w-[883px]">
                Join us as we take $BONKIN from a fair launch to the next
                legendary meme coin on Solana!
              </Paragraph1>

              <div className="flex  gap-[24px]">
                {" "}
                <Link href="https://x.com/isbonk11832?s=11&t=8jfhFs5Tb376tWv9u9dqKA">
                  {" "}
                  <img src="/images/x.png" alt="" className=" h-[150px]" />
                </Link>{" "}
                <Link href="https://t.me/bonkinonsol">
                  <img src="/images/tme.png" alt="" className=" h-[150px]" />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default section6;
