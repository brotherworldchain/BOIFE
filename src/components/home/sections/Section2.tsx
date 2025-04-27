"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Header1,
  Header3,
  Paragraph1,
  Paragraph2,
  Paragraph3,
} from "@/components/Text";
import { motion } from "framer-motion";
import Link from "next/link";

function Section2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Investment Readiness",
      content:
        "We design pitch decks, investor memos, and market research reports that effectively communicate your startup’s potential and value proposition—ensuring you stand out to investors and increase your chances of securing funding.",
    },
    {
      title: "Investor Relations",
      content:
        "Maintain transparent communication with your investors. We ensure you provide consistent updates, creating long-term relationships that not only secure future rounds but also foster lasting support as your startup grows. This service is offered on a limited retainership basis.",
    },
    {
      title: "Startup Support",
      content:
        "Through our proprietary product, OTIK, we provide executive intelligence to founders and C-suite executives in Africa's startup ecosystem. Our mission is to equip startup operators with actionable insights to maximize shareholder value and elevate the ecosystem's overall quality and outlook. ",
    },
  ];

  return (
    <div
      id="about"
      className="bg-bg_orange z-50 relative"
      style={{
        // height: "140vh",
        background:
          "linear-gradient(to bottom, #ff5c01 40%, #fc8e03 80%, #ffd302 100%)",
      }}
    >
      <div className="container1 uppercase  mx-auto py-[50px] xl:py-[110px] text-white px-6">
        <div className=" flex flex-col  gap-[20px]">
          <div
            data-aos="fade-up"
            className=" border-[6px] rounded-[20px] p-4 sm:p-8"
            style={{
              // height: "140vh",
              background:
                "linear-gradient(to right, #fc8e03 40%, #fc8e03 40%, #ffd302 100%)",
            }}
          >
            <Header1 className=" text-white ">ABOUT EVERYTHING IS BONKIN</Header1>
            <Paragraph1 className="text-white font-bold">
              EVERYTHING IS BONKIN IS THE SOCIAL LAYER AND COMMUNITY MEME COIN OF SOLANA WITH
              DEEP INTEGRATIONS AS A UTILITY TOKEN ACROSS A WIDE BASE OF
              APPLICATIONS AND PROTOCOLS WITHIN THE WEB3 ECOSYSTEM. WE AIM TO
              ACHIEVE THIS THROUGH EXPANDING OUR GROWING LIST OF INTEGRATIONS
              ACROSS:
            </Paragraph1>
            <div className="flex gap-4 flex-col mt-4 sm:flex-row">
              {" "}
              <div className="px-[40px] rounded-lg border-4 font-bold text-white py-2  ">
                Multi-chain
              </div>
              <div className="px-[40px] rounded-lg border-4 font-bold text-white py-2  ">
                DIFi
              </div>
              <div className="px-[40px] rounded-lg border-4 font-bold text-white py-2  ">
                gaming{" "}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 xl:gap-[20px] mt-[10px] ">
            {" "}
            <div
              data-aos="fade-up"
              className=" border-[6px] rounded-[20px] p-4 sm:p-8"
              style={{
                // height: "140vh",
                background:
                  "linear-gradient(to right, #fc8e03 40%, #fc8e03 40%, #ffd302 100%)",
              }}
            >
              <Header1 className=" text-white ">USe EVERYTHING IS BONKIN</Header1>

              <div className="flex gap-4 flex-col mt-4 ">
                {" "}
                <div className="px-[40px] rounded-lg border-4 font-bold text-white py-2  ">
                  50 exchanges
                </div>
                <div className="px-[40px] rounded-lg border-4 font-bold text-white py-2  ">
                  30 defi
                </div>
                <div className="px-[40px] rounded-lg border-4 font-bold text-white py-2  ">
                  24 art, sports and games{" "}
                </div>
                <div className="px-[40px] rounded-lg border-4 font-bold text-white py-2  ">
                  20 dev tools
                </div>
                <div className="px-[40px] rounded-lg border-4 font-bold text-white py-2  ">
                  9 wallets
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className=" border-[6px] rounded-[20px] p-4 sm:p-8"
              style={{
                // height: "140vh",
                background:
                  "linear-gradient(to right, #ff5c01 10%, #fc8e03 40%, #ffd302 100%)",
              }}
            >
              <Header1 className=" text-white ">Get EVERYTHING IS BONKIN</Header1>

              <div className="flex gap-4 flex-col mt-4 ">
                {" "}
                <Paragraph1 className="text-white font-bold">
                  40+ DEXS & CEXES, BUY EVERYTHING IS BONKIN TODAY
                </Paragraph1>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" id="projects" className="pt-[70px]">
            <Header1>Key projects</Header1>
            <div className=" grid sm:grid-cols-4 grid-cols-1 gap-4 mt-4">
              <div
                data-aos="fade-up"
                className=" border-[6px] flex flex-col items-center text-center gap-2 rounded-[20px] p-4 sm:p-8"
                style={{
                  // height: "140vh",
                  background:
                    "linear-gradient(to right, #fc8e03 10%, #fc8e03 40%, #ffd302 100%)",
                }}
              >
                <img src="/images/botsa.png" className="h-[150px]" alt="" />
                <Header3 className=" text-white ">EVERYTHING IS BONKIN bot </Header3>

                <div className="flex gap-4 flex-col  ">
                  {" "}
                  <Paragraph1 className="text-white d">
                    Telegram bot for buying EVERYTHING IS BONKIN and more{" "}
                  </Paragraph1>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className=" border-[6px] flex flex-col items-center text-center gap-2 rounded-[20px] p-4 sm:p-8"
                style={{
                  // height: "140vh",
                  background:
                    "linear-gradient(to right, #fc8e03 10%, #fc8e03 40%, #ffd302 100%)",
                }}
              >
                <img src="/images/swap.png" className="h-[150px]" alt="" />
                <Header3 className=" text-white ">EVERYTHING IS BONKIN SWAP </Header3>

                <div className="flex gap-4 flex-col  ">
                  {" "}
                  <Paragraph1 className="text-white d">
                    Building the Nexus of Degeneracy on Solana{" "}
                  </Paragraph1>
                </div>
              </div>{" "}
              <div
                data-aos="fade-left"
                className=" border-[6px] flex flex-col items-center text-center gap-2 rounded-[20px] p-4 sm:p-8"
                style={{
                  // height: "140vh",
                  background:
                    "linear-gradient(to right, #fc8e03 10%, #fc8e03 40%, #ffd302 100%)",
                }}
              >
                <img src="/images/ware.png" className="h-[150px]" alt="" />
                <Header3 className=" text-white ">EVERYTHING IS BONKINREWARDS </Header3>

                <div className="flex gap-4 flex-col  ">
                  {" "}
                  <Paragraph1 className="text-white d">
                    Earn rewards by locking your $EVERYTHING IS BONKIN{" "}
                  </Paragraph1>
                </div>
              </div>{" "}
              <div
                data-aos="fade-up"
                className=" border-[6px] flex flex-col items-center text-center gap-2 rounded-[20px] p-4 sm:p-8"
                style={{
                  // height: "140vh",
                  background:
                    "linear-gradient(to right, #fc8e03 10%, #fc8e03 40%, #ffd302 100%)",
                }}
              >
                <img src="/images/moon.png" className="h-[150px]" alt="" />
                <Header3 className=" text-white ">MOONWALK </Header3>

                <div className="flex gap-4 flex-col  ">
                  {" "}
                  <Paragraph1 className="text-white d">
                    Moonwalk gamifies fitness by introducing a financial
                    incentive to complete your daily goals{" "}
                  </Paragraph1>
                </div>
              </div>{" "}
              <div
                data-aos="fade-right"
                className=" border-[6px] flex flex-col items-center text-center gap-2 rounded-[20px] p-4 sm:p-8"
                style={{
                  // height: "140vh",
                  background:
                    "linear-gradient(to right, #fc8e03 10%, #fc8e03 40%, #ffd302 100%)",
                }}
              >
                <img src="/images/bet.png" className="h-[150px]" alt="" />
                <Header3 className=" text-white ">EVERYTHING IS BONKINBETS </Header3>

                <div className="flex gap-4 flex-col  ">
                  {" "}
                  <Paragraph1 className="text-white d">
                    A web3 sportsbook by LuckyDragonTail. Bet with EVERYTHING IS BONKIN, SOL,
                    or USDC—no deposits needed.{" "}
                  </Paragraph1>
                </div>
              </div>{" "}
              <div
                data-aos="fade-left"
                className=" border-[6px] flex flex-col items-center text-center gap-2 rounded-[20px] p-4 sm:p-8"
                style={{
                  // height: "140vh",
                  background:
                    "linear-gradient(to right, #fc8e03 10%, #fc8e03 40%, #ffd302 100%)",
                }}
              >
                <img src="/images/scoo.png" className="h-[150px]" alt="" />
                <Header3 className=" text-white ">EVERYTHING IS BONKIN SCOOPER </Header3>

                <div className="flex gap-4 flex-col  ">
                  {" "}
                  <Paragraph1 className="text-white d">
                    Clean up your wallets and earn EVERYTHING IS BONKIN{" "}
                  </Paragraph1>
                </div>
              </div>{" "}
              <div
                data-aos="fade-up"
                className=" border-[6px] flex flex-col items-center text-center gap-2 rounded-[20px] p-4 sm:p-8"
                style={{
                  // height: "140vh",
                  background:
                    "linear-gradient(to right, #fc8e03 10%, #fc8e03 40%, #ffd302 100%)",
                }}
              >
                <img src="/images/openb.png" className="h-[150px]" alt="" />
                <Header3 className=" text-white ">OPENEVERYTHING IS BONKIN </Header3>

                <div className="flex gap-4 flex-col  ">
                  {" "}
                  <Paragraph1 className="text-white d">
                    Swap $EVERYTHING IS BONKIN on OpenBook's DEX{" "}
                  </Paragraph1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
