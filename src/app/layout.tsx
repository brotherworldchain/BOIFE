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
  title: "$BONKIN - Bonk Is For Everyone | The People's Meme Coin",
  description:
    "$BONKIN is the fair-launched meme coin for the people, powered by Bonk's revolutionary platform. Join the decentralized meme revolution on Solana!",
  generator:
    "$BONKIN, meme coin, Bonk, Solana meme coins, community coin, fair launch crypto, decentralized meme tokens, viral crypto, Bonk platform, letsbonk.fun",
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
    "$BONKIN",
    "Solana blockchain",
    "Bonk Is For Everyone",
    "BONKIN community",
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

  applicationName: "$BONKIN",
  openGraph: {
    title: "$BONKIN - Bonk Is For Everyone | The People's Meme Coin",
    description:
      "Join $BONKIN, the meme coin for everyone! No presales, no whales, just pure community-driven fun on Solana’s Bonk-powered launchpad.",
    url: "https://www.BONKIN.fun", // <-- Update this URL to your real $BONKIN website if different
    siteName: "$BONKIN",
    images: [
      {
        url: "https://bonkcoin.com/static/media/bonkog_800.18d79e1cea6b283f2ee7.png", // <-- Replace if you have a $BONKIN image
        width: 1200,
        height: 630,
        alt: "$BONKIN - Bonk Is For Everyone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BONKINcoin", // <-- Make sure this is your real Twitter handle
    title: "$BONKIN - BONKIN Is For Everyone | The People's Meme Coin",
    description:
      "Fair-launched, community-powered, and built on Solana. Discover $BONKIN and join the meme revolution!",
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
