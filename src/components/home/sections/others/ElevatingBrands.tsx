import { Header1, Header3, Header4, Paragraph1, Paragraph2 } from "@/components/Text";
import React, { useEffect, useState } from "react";

interface Coin {
  id: string;
  name: string;
  image: string;
}

function ElevatingBrands() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
        );
        const data = await response.json();
        const selectedCoins = data.slice(0, 50).map((coin: any) => ({
          id: coin.id,
          name: coin.name,
          image: coin.image,
        }));
        setCoins(selectedCoins);
      } catch (error) {
        console.error("Failed to fetch coins", error);
      }
    }

    fetchCoins();
  }, []);

  return (
    <div
      className="text-p_black  mt-[40px]  sm:mt-[100px] pt-[20px] pb-[10px] xl:pt-[40px] xl:pb-[20px] relative"
      // style={{
      //   backgroundImage: 'url("/images/bgearth.png")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="slider-container3 arch-container overflow-hidden- relative">
        <div className="slider-content3 arch flex items-center gap-[45px] animate-slider3">
          {coins.map((coin, index) => (
            <div
              key={index}
              className="item flex-shrink-0 arc-item transition-transform duration-300 hover:scale-110"
            >
              {" "}
              <a
                href={`https://www.coingecko.com/en/coins/${coin.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="sm:h-[70px] h-[50px] w-auto rounded-full"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-center px-4 items-center justify-center w-full py-[50px] sm:py-[100px] gap-2 sm:gap-20">
        <div
          data-aos="zoom-in-right"
          className=" border-[3px] rounded-[20px] p-4 sm:px-[50px]"
          style={{
            // height: "140vh",
            background:
              "linear-gradient(to bottom, #ff5c01 10%, #fc8e03 40%, #ffd302 100%)",
          }}
        >
          <Header3 className=" text-white ">911k +</Header3>

          <div className="flex gap-4 flex-col ">
            {" "}
            <Paragraph1 className="text-white font-bold">Holders </Paragraph1>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className=" border-[3px] rounded-[20px] p-4 sm:px-[50px]"
          style={{
            // height: "140vh",
            background:
              "linear-gradient(to bottom, #ff5c01 10%, #fc8e03 40%, #ffd302 100%)",
          }}
        >
          <Header3 className=" text-white ">400 +</Header3>

          <div className="flex gap-4 flex-col ">
            {" "}
            <Paragraph1 className="text-white font-bold">
              Integrations{" "}
            </Paragraph1>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className=" border-[3px] rounded-[20px] p-4 sm:px-[50px]"
          style={{
            // height: "140vh",
            background:
              "linear-gradient(to bottom, #ff5c01 10%, #fc8e03 40%, #ffd302 100%)",
          }}
        >
          <Header3 className=" text-white ">13</Header3>

          <div className="flex gap-4 flex-col ">
            {" "}
            <Paragraph1 className="text-white font-bold">chains </Paragraph1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElevatingBrands;
