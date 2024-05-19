"use client";
import { useState } from "react";
import Heading from "./Heading";
import SingleFaqComponent from "./SingleFaqComponent";
import WidthWrapper from "./WidthWrapper";

const faqs_one: { question: string; answer: string; id: number }[] = [
  {
    question: "Do I need to sign a contract?",
    id: 0,
    answer: `We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.`,
  },
  {
    id: 1,
    question: "How do we ensure quality of deliverables?",
    answer: `We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.`,
  },
  {
    id: 2,
    question: "How do I begin collaboration?",
    answer: `Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs.`,
  },
];

const faqs_two: { question: string; answer: string; id: number }[] = [
  {
    id: 3,
    question: "What sevices do we offer?",
    answer: `We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you`,
  },
  {
    id: 4,
    question: "How do you ensure user privacy?",
    answer: `We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.`,
  },
  {
    id: 5,
    question: "How can I pay for the services?",
    answer: `We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.`,
  },
];

export default function Faqs() {
  const [value, setValue] = useState<null | number>(null);

  return (
    <div className="h-[70vh]">
      <WidthWrapper>
        <div className="flex flex-col items-center gap-10">
          <Heading gap={2}>GET TO KNOW US</Heading>
          <p className="text-5xl max-[900px]:text-2xl">
            Frequently Asked Questions
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-16 max-[768px]:grid-cols-1">
          <div className="flex flex-col gap-2">
            {faqs_one.map((faq, index) => (
              <SingleFaqComponent
                key={index}
                id={faq.id}
                setValue={setValue}
                value={value}
                answer={faq.answer}
                question={faq.question}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {faqs_two.map((faq, index) => (
              <SingleFaqComponent
                key={index}
                id={faq.id}
                setValue={setValue}
                value={value}
                answer={faq.answer}
                question={faq.question}
              />
            ))}
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
