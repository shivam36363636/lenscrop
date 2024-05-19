import { ReactNode } from "react";

export default function WidthWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-[1200px] h-full mx-auto max-[1200px]:w-full max-[1220px]:px-4">
      {children}
    </div>
  );
}
