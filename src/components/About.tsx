import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";
import WidthWrapper from "./WidthWrapper";
import Link from "next/link";

export default function About() {
  return (
    <WidthWrapper>
      <div className="py-6 flex flex-col items-center gap-[50px] ">
        <Heading className="!text-[64px]">About us</Heading>
        <div className="flex hover:scale-105 transition-all max-md:flex-col gap-10 duration-300 mx-auto rounded-md p-8 bg-[#e2f2ff] max-w-[900px]">
          <div className="flex-1 flex flex-col gap-8 items-start">
            <h3 className="text-4xl font-semibold mt-7">Welcome To LENS</h3>
            <p className="text-lg leading-7">
              We put our hearts, souls and sweat into designing and developing
              custom AI - powered solutions for your business so you don&apos;t
              have to.
            </p>
            <Button.GhostedButton className="py-2 mt-4 hover:text-white hover:bg-black">
              <Link href={"/about"}>Learn More About This</Link>
            </Button.GhostedButton>
          </div>
          <div className="flex-1">
            <div className="rounded-lg overflow-hidden p-5 bg-white">
              <img
                src={"/assets/aboutLatest.jpg"}
                alt="latest pic"
                className="rounded-lg hover:scale-110 transition-all duration-300 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
}
