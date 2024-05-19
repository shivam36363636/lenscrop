import Heading from "./Heading";
import WidthWrapper from "./WidthWrapper";

const serviceCards: ServiceProps[] = [
  {
    id: 1,
    content: `Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.`,
    label: "Biometrics",
    labelColor: "green",
  },
  {
    id: 2,
    content: `Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.`,
    label: "Image Analysis",
    labelColor: "blue",
  },
  {
    id: 3,
    content: `Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.`,
    label: "Cross-Media Translation",
    labelColor: "red",
  },
  {
    id: 4,
    content: `We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.`,
    label: "3D Modelling and Design.",
    labelColor: "orange",
  },
];

export default function Services() {
  return (
    <div>
      <WidthWrapper>
        <div className="flex flex-col items-center gap-10">
          <Heading gap={2}>SERVICES</Heading>
          <p className="text-5xl max-[900px]:text-2xl text-center">
            We provide Artificial Intelligence Services
          </p>
          <div className="w-[800px] max-[920px]:w-full grid grid-cols-2 max-[800px]:grid-cols-1 gap-10">
            {serviceCards.map((servicecard) => (
              <ServiceCard
                content={servicecard.content}
                id={servicecard.id}
                label={servicecard.label}
                key={servicecard.id}
                labelColor={servicecard.labelColor}
              />
            ))}
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}

type ServiceProps = {
  label: string;
  content: string;
  id: number;
  labelColor: "green" | "blue" | "red" | "orange";
};

function ServiceCard({ content, label, id, labelColor }: ServiceProps) {
  return (
    <div className="flex flex-col gap-2 group shadow-lg p-5 rounded-lg border border-solid border-white hover:border-black transition-all">
      <div className="flex items-center gap-2">
        <p className="text-[64px] font-bold text-black/30">0{id}</p>
        <p
          style={{ color: labelColor }}
          className={`text-3xl font-semibold transition-all -translate-x-7 group-hover:translate-x-0`}
        >
          {label}
        </p>
      </div>
      <p className="leading-7">{content}</p>
    </div>
  );
}
