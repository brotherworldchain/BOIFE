import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import Head from "next/head"; // Import Head for adding custom scripts
import NetworkStatusChecker from "./NetworkStatusChecker";
import { Toaster } from "react-hot-toast"; // Import Toaster

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "$BOIFE - BONK IS FOR EVERYONE Is For Everyone | The People's Meme Coin",
  description:
    "$BONK IS FOR EVERYONE is the fair-launched meme coin for the people, powered by Bonk's revolutionary platform. Join the decentralized meme revolution on Solana!",
  generator:
    "$BONK IS FOR EVERYONE, meme coin, Bonk, Solana meme coins, community coin, fair launch crypto, decentralized meme tokens, viral crypto, Bonk platform, letsbonk.fun",
  keywords: [
    "meme coin",
    "Bonk meme coin",
    "Solana tokens",
    "fair launch crypto",
    "community-driven tokens",
    "decentralized meme coin",
    "viral crypto projects",
    "bonk-powered launch",
    "letsbonk.fun",
    "$BONK IS FOR EVERYONE",
    "Solana blockchain",
    "Bonk Is For Everyone",
    "BONK IS FOR EVERYONE community",
    "Bonk launchpad",
    "anti-whale launch",
    "airdrops and meme contests",
    "fair crypto launch",
    "crypto with no presale",
    "decentralized finance",
    "Solana meme economy",
    "Bonk token ecosystem",
    "Solana NFT staking",
    "DAO governance meme coin",
    "crypto staking rewards",
    "meme culture crypto",
    "fun and fair crypto",
    "deflationary meme token",
    "Solana DeFi projects",
    "Bonk launch revolution",
    "people's meme coin",
  ],

  applicationName: "$BONK IS FOR EVERYONE",
  openGraph: {
    title:
      "$BOIFE - BONK IS FOR EVERYONE  Is For Everyone | The People's Meme Coin",
    description:
      "Join $BONK IS FOR EVERYONE, the meme coin for everyone! No presales, no whales, just pure community-driven fun on Solana’s Bonk-powered launchpad.",
    url: "https://www.BONK IS FOR EVERYONE.fun", // <-- Update this URL to your real $BONK IS FOR EVERYONE website if different
    siteName: "$BONK IS FOR EVERYONE",
    images: [
      {
        url: "https://bonkcoin.com/static/media/bonkog_800.18d79e1cea6b283f2ee7.png", // <-- Replace if you have a $BONK IS FOR EVERYONE image
        width: 1200,
        height: 630,
        alt: "$BOIFE IS FOR EVERYONE - BONK Is For Everyone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BONK IS FOR EVERYONE coin", // <-- Make sure this is your real Twitter handle
    title:
      "$BOIFE - BONK IS FOR EVERYONE Is For Everyone | The People's Meme Coin",
    description:
      "Fair-launched, community-powered, and built on Solana. Discover $BONK IS FOR EVERYONE and join the meme revolution!",
    images:
      "https://bonkcoin.com/static/media/bonkog_800.18d79e1cea6b283f2ee7.pngaos", // <-- Replace if needed
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Add Cloudinary widget script */}
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
          async
        ></script>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F2YRYGXF65"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F2YRYGXF65');
            `,
          }}
        />
      </Head>
      <body className=" bg-[#f1efe8]-">
        <Toaster />
        {/* <NetworkStatusChecker /> */}

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
