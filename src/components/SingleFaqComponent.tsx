import { DownArrow } from "@/icons/Icons";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  question?: string;
  answer?: string;
  value: number | null;
  setValue: Dispatch<SetStateAction<number | null>>;
  id: number;
};

export default function SingleFaqComponent({
  answer,
  question,
  value,
  setValue,
  id,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={() => {
          setValue((prev) => {
            if (prev === null) {
              return id;
            }
            if (prev === id) {
              return null;
            } else {
              return id;
            }
          });
        }}
        className="border p-3 rounded-lg flex items-center justify-between"
      >
        <p className="font-semibold">{question || "This is question"}</p>
        <DownArrow />
      </div>
      {value === id && <div className="p-3">{answer || "this is answer"}</div>}
    </div>
  );
}
