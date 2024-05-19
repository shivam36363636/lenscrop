"use client";
import Image from "next/image";
import Link from "next/link";
import WidthWrapper from "./WidthWrapper";
import ToggleButton from "./ToggleButton/ToggleButton";
import MobileNavbar from "./MobileNavbar";
import { useEffect, useRef, useState } from "react";

type NavLinks = {
  label: string;
  href: string;
}[];

export const navLinks: NavLinks = [
  {
    label: "MakeMyWeb",
    href: "https://makemyweb.ai",
  },
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Company",
    href: "/company",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
];

export default function Navbar() {
  const navbarNode = useRef<HTMLDivElement>(null);
  const scrollValue = useRef(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    function handleScrollEvent() {
      if (!toggle) {
        if (window.scrollY === 0) {
          navbarNode.current!.style.background = `transparent`;
        }
        if (window.scrollY > scrollValue.current) {
          navbarNode.current!.style.transform = `translateY(-100px)`;
        } else {
          navbarNode.current!.style.transform = `translateY(0px)`;
        }
        scrollValue.current = window.scrollY;
      }
    }
    document.addEventListener("scroll", handleScrollEvent);

    return () => document.removeEventListener("scroll", handleScrollEvent);
  });

  return (
    <div
      ref={navbarNode}
      className="shadow fixed z-50 top-0 left-0 right-0 transition-all bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0"
    >
      <WidthWrapper>
        <div className="flex items-center justify-between py-4 max-[1000px]:py-3 max-[660px]:py-1">
          <Link href={"/"}>
            <Image
              src={"/assets/nav_logo.webp"}
              alt="company logo"
              width={80}
              height={70}
            />
          </Link>
          <div className="flex items-center gap-9 max-[660px]:hidden">
            {navLinks?.map((navLink, index) => (
              <Link
                className="font-medium text-black/80 hover:text-black/40 transition-all"
                key={index}
                href={navLink?.href}
              >
                {navLink?.label}
              </Link>
            ))}
            <ToggleButton />
          </div>
          <MobileNavbar setToggle={setToggle} toggle={toggle} />
        </div>
      </WidthWrapper>
    </div>
  );
}
