import { ReactNode } from "react";
import Heading from "./Heading";
import WidthWrapper from "./WidthWrapper";
import {
  FirstSvgOfVision,
  SecondSvgOfVision,
  ThirdSvgOfVision,
} from "@/icons/Icons";

export default function OurVision() {
  return (
    <div>
      <WidthWrapper>
        <div>
          <div className="flex flex-col items-center gap-10">
            <Heading gap={2}>OUR VISION</Heading>
            <p className="text-5xl max-[900px]:text-2xl">AI for Social Good</p>
            <p className="text-center max-w-[500px] leading-7">
              Explainable AI (XAI) is an emerging subject of machine learning
              research that refers to strategies that try to provide
              transparency to typically opaque AI models and their predictions.
            </p>
          </div>
          <div className="w-[800px] max-[900px]:w-full mx-auto grid grid-cols-[1fr_1px_1fr] max-[600px]:grid-cols-1 max-[600px]:mt-16 mt-32">
            <div className="p-8 relative">
              <SvgBubble className="absolute top-0 right-0 translate-x-1/2 max-[600px]:hidden">
                <FirstSvgOfVision />
              </SvgBubble>
              <Box
                heading="Diversity & Fairness"
                subheading="When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases."
              />
            </div>
            <div className="border border-black border-dashed max-[600px]:hidden"></div>
            <div></div>
            <div></div>
            <div className="border border-black border-dashed max-[600px]:hidden"></div>
            <div className="p-8 relative">
              <SvgBubble className="absolute top-0 left-0 -translate-x-1/2 max-[600px]:hidden">
                <SecondSvgOfVision />
              </SvgBubble>
              <Box
                heading="Regulatory Compliance"
                subheading="Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability."
              />
            </div>
            <div className="p-8 relative">
              <SvgBubble className="absolute top-0 right-0 translate-x-1/2 max-[600px]:hidden">
                <ThirdSvgOfVision />
              </SvgBubble>
              <Box
                heading="Code of Ethics"
                subheading="LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone."
              />
            </div>
            <div className="border border-black border-dashed max-[600px]:hidden"></div>
            <div></div>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
type BoxProps = {
  heading: string;
  subheading: string;
};
function Box({ heading, subheading }: BoxProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">{heading}</h2>
      <p>{subheading}</p>
    </div>
  );
}

type Props = {
  children: ReactNode;
  className?: string;
};

function SvgBubble({ children, className }: Props) {
  return (
    <div
      className={`w-[60px] h-[60px] rounded-full bg-white border-black/50 border-4 border-solid flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
