import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import MeetComponent from "@/components/MeetComponent";
import Number from "@/components/Number";
import OurVision from "@/components/OurVision";
import Services from "@/components/Services";
import WhyChooseLens from "@/components/WhyChooseLens";

export default function Home() {
  return (
    <div className="flex flex-col gap-28">
      <Hero />
      <About />
      <Services />
      <MeetComponent />
      <WhyChooseLens />
      <OurVision />
      <Blogs />
      <Number />
      <Faqs />
      <GetInTouch />
    </div>
  );
}
