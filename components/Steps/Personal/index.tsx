import React from "react";
import apple from "../../../public/assets/apple.jpg";
import Image from "next/image";
import EmailInput from "@/components/Inputs/EmailInput";
import { useContextSteps } from "@/context/useContextInputs/useContextSteps";

function Personal() {
  const context = useContextSteps();
  return (
    <div className="w-full h-full 2xl:px-32 py-12">
      <div className="flex flex-col  h-full justify-start">
        <div className="flex flex-row items-center justify-center gap-4 border-b-slate-200 border-t-0 border-l-0 border-r-0 py-8 border">
          <Image
            src={apple}
            width={32}
            height={32}
            alt={"apple"}
            className="rounded-md"
          />
          <h1 className="text-zinc-700 font-medium">Apple Store Inc</h1>
        </div>

        <div className="py-12 pb-16 border-b-slate-200 border-t-0 border-l-0 border-r-0 border">
          <EmailInput
            placeholder="Digite seu email de compra..."
            confirmed={(value) => {
              context.setterValidInputs(value, "email");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Personal;
