import { TickMark } from "@/icons/Icons";
import Heading from "./Heading";
import WidthWrapper from "./WidthWrapper";
import { ReactNode } from "react";

const point = [
  "State-of-the-art solutions",
  "Fast & Efficient",
  "No extra computation fee",
  "No licensing fee",
  "Lifetime support & upgrades",
  "Plug-and-Play",
  "24x7 Progress Monitoring",
  "Incremental Updates",
];

const cardsData = [
  {
    heading: "Exclusive Rights",
    content:
      "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
    img: "/assets/green.png",
  },
  {
    heading: "Research Driven",
    content:
      "We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.",
    img: "/assets/blue.png",
  },
  {
    heading: "Plug-and-Play",
    content:
      "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
    img: "/assets/yellow.png",
  },
  {
    heading: "Lifetime Support",
    content:
      "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
    img: "/assets/red.png",
  },
];

export default function WhyChooseLens() {
  return (
    <div>
      <WidthWrapper>
        <div className="flex flex-col items-center gap-10">
          <Heading gap={2}>WHY CHOOSE LENS</Heading>
          <p className="text-5xl max-[900px]:text-2xl text-center">
            AI-driven solutions backed by science
          </p>
          <p className="text-center text-xl leading-7 w-[600px] text-black/50 max-[610px]:w-full">
            Every piece of AI technology shipped from LENS is thoroughly
            benchmarked via rigorous evaluations. With a global network of
            experts and academicians, we guarantee the most accurate and robust
            solutions in the market.
          </p>
          <div className="grid mt-4 grid-cols-2 gap-2">
            {point.map((po, index) => (
              <TickMarkComponent key={index}>{po}</TickMarkComponent>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
            {cardsData.map((card, index) => (
              <Card {...card} key={index} />
            ))}
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}

function TickMarkComponent({ children }: { children: ReactNode }) {
  return (
    <p className="flex text-xl items-center gap-2">
      <TickMark />
      {children}
    </p>
  );
}

function Card({
  content,
  heading,
  img,
}: {
  heading: string;
  content: string;
  img: string;
}) {
  return (
    <div className="flex shadow-xl rounded-3xl p-8 flex-col items-center gap-4">
      <h3 className="text-2xl self-start">{heading}</h3>
      <img className="h-[100px]" src={img} alt="card image" />
      <p className="leading-7 text-lg mt-5">{content}</p>
    </div>
  );
}
