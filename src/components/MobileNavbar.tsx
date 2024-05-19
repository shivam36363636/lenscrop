"use client";
import { LeftIcon, MobileIcon } from "@/icons/Icons";
import { Dispatch, SetStateAction, useState } from "react";
import { navLinks } from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import ToggleButton from "./ToggleButton/ToggleButton";

type Props = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNavbar({ setToggle, toggle }: Props) {
  return (
    <div className="hidden max-[660px]:block">
      <div className="cursor-pointer" onClick={() => setToggle(true)}>
        <MobileIcon />
      </div>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 z-10"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`absolute top-0 right-0 w-[300px] max-[310px]:w-screen h-screen bg-white flex flex-col gap-3 transition-all ease-in-out duration-300 ${
              toggle ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <div className={`flex items-center justify-between p-3 shadow-sm`}>
              <Link href={"/"}>
                <Image
                  src={"/assets/nav_logo.webp"}
                  alt="company logo"
                  width={60}
                  height={50}
                />
              </Link>
              <div className="cursor-pointer" onClick={() => setToggle(false)}>
                <LeftIcon />
              </div>
            </div>
            <div
              onClick={() => setToggle(false)}
              className="flex flex-col gap-2"
            >
              {navLinks.map((navLik, index) => (
                <Link
                  key={index}
                  href={navLik.href}
                  className="p-4 hover:bg-slate-200 font-bold hover:text-black text-black/80"
                >
                  {navLik.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto p-2 flex items-center justify-end">
              <ToggleButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
