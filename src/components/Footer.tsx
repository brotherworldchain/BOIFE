"use client";

import React from "react";
import {
  HeaderAny,
  Paragraph1,
  Paragraph2,
  ParagraphLink1,
  ParagraphLink2,
} from "./Text";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  if (pathname.includes("/admin")) {
    return null; // Return null to hide the navbar
  }

  return (
    <div
      className={
        ["/insight-", "/resources-"].includes(pathname)
          ? "bg-bg_gray hidden sm:py-[100px]-"
          : " bg-white sm:py-[100px]-"
      }
    >
      <div className="  bg-black text-white [#4A4A4A]  ">
        <div className=" container1 py-[32px] sm:py-[40px] ">
          {/* desktop */}
          

          <div className=" border-t border-black pt-[24px] sm:pt-[32px] flex justify-center">
            <ParagraphLink2 className="  text-[#ECECEC]- ">
              © 2025 BONKIN. All rights reserved.{" "}
            </ParagraphLink2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
