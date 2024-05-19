import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  gap?: number;
};

export default function Heading({ children, className, gap }: Props) {
  return (
    <p className={`text-2xl text-center inline-block ${className}`}>
      <span>{children}</span>
      <span
        className={`w-[80%] mx-auto mt-${
          gap || 5
        } h-2 block rounded-2xl bg-gradient-to-r from-blue-600 to-slate-100`}
      ></span>
    </p>
  );
}
