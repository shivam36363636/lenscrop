import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function Button() {
  return null;
}

function PrimaryButton({ children, className }: Props) {
  return (
    <button className={`py-1 px-3 bg-black/80 rounded text-white ${className}`}>
      {children}
    </button>
  );
}

function GhostedButton({ children, className }: Props) {
  return (
    <button
      className={`py-1 px-3 border-black/80 border rounded text-black/80 border-solid ${className}`}
    >
      {children}
    </button>
  );
}

Button.PrimaryButton = PrimaryButton;
Button.GhostedButton = GhostedButton;

export default Button;
