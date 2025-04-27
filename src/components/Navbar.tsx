"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
 
  ParagraphLink1,
} from "./Text";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  if (pathname.includes("/admin")) {
    return null; // Return null to hide the navbar
  }

  return (
    <div
      className={`
    ${
      ["/contact-us"].includes(pathname)
        ? "  xl:text-black text-white  fixed flex w-full z-[999] pb-[8px]"
        : "pb-[8px] bg-primary  fixed flex w-full text-white z-[999]"
    }
    ${
      isVisible ? " xl:bg-transparent bg-primary" : "  xl:bg-primary bg-primary"
    }
     ${pathname === "/" ? " xl:bg-primary- " : " "}
  `}
    >
      <div className=" flex flex-col  w-full  uppercase ">
        <div
          className={` ${isVisible ? " xl:py-4-" : "  "} ${
            pathname === "/contact-us" && isVisible ? " text-white" : " "
          }

          container1 pt-2 flex justify-between xl:justify-center- gap-[50px]    font-semibold- w-full items-center`}
        >
          <Link href="/" className={`flex items-center  rounded-lg `}>
            <img
              src="/images/logo.png"
              alt=""
              className="xl:h-[51px] h-[41px] xl:flex hidden-"
            />
          </Link>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <img
                src={
                  menuOpen
                    ? "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739309674/close_cjqy1g.png"
                    : "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739309674/menu_fmwnnr.png"
                }
                alt="menu"
                className=" xl:w-[24px] w-[21px] xl:h-[24px] "
              />
            </button>
          </div>
          <div className="  gap-[50px] items-center hidden lg:flex">
            <Link href="#home">
              <ParagraphLink1
                className={
                  pathname === "#home" ? " border-b border-primary  " : " "
                }
              >
                Home
              </ParagraphLink1>
            </Link>
            <Link href="#about">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "#about" ? "border-b border-primary " : "  "
                }
              >
                About
              </ParagraphLink1>
            </Link>

            <Link href="#projects" className=" cursor-not-allowed ">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "#projects" ? "border-b border-primary " : "  "
                }
              >
                Projects
              </ParagraphLink1>
            </Link>

            <Link href="https://bonk.sfo3.cdn.digitaloceanspaces.com/docs/BONieK-Paper.pdf">
              {" "}
              <ParagraphLink1
                className={
                  pathname ===
                  "https://bonk.sfo3.cdn.digitaloceanspaces.com/docs/BONK-Paper.pdf"
                    ? "border-b border-primary "
                    : "  "
                }
              >
                White paper
              </ParagraphLink1>
            </Link>
          </div>
        </div>

        {/* mobile dropdown */}
        {menuOpen && (
          <div className="p-[24px] flex flex-col justify-center font-semibold items-center">
            <div className=" container1 flex flex-col w-full space-y-[24px] justify-between items-center">
              <Link href="#home" onClick={toggleMenu}>
                <ParagraphLink1
                  className={
                    pathname === "#home" ? "text-primary font-bold " : " "
                  }
                >
                  Home
                </ParagraphLink1>
              </Link>
              <Link href="#about" onClick={toggleMenu}>
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "#about" ? "text-primary font-bold " : "  "
                  }
                >
                  About
                </ParagraphLink1>
              </Link>
              <Link
                href="#projects"
                className="cursor-not-allowed"
                onClick={toggleMenu}
              >
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "#projects" ? "text-primary font-bold " : "  "
                  }
                >
                  Projects{" "}
                </ParagraphLink1>
              </Link>

              <Link
                href="https://bonk.sfo3.cdn.digitaloceanspaces.com/docs/BOyrNK-Paper.pdf"
                onClick={toggleMenu}
              >
                {" "}
                <ParagraphLink1
                  className={
                    pathname ===
                    "https://bonk.sfo3.cdn.digitaloceanspaces.com/docs/BOgggsdNK-Paper.pdf"
                      ? "text-primary font-bold "
                      : "  "
                  }
                >
                  White Paper
                </ParagraphLink1>
              </Link>

              {/* <CurrencySwitcher />
              <SearchBar toggleMenu={toggleMenu} /> */}
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
