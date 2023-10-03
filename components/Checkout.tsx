"use client";
import React, { useState } from "react";
import { StepValue, steps } from "./Steps/utils";
export default function Checkout() {
  const [currentStep, setCurrentStep] = useState<StepValue>(1);

  return (
    <section className="p-4 sm:p-6 md:p-12 lg:p-16  w-full shadow-md rounded-lg flex flex-col justify-center">
      <div className="flex flex-row items-center py-12 px-4 2xl:px-48">
        <div className="flex flex-col justify-center items-center gap relative">
          <div className="h-8 w-8 flex bg-gray-800 rounded-full justify-center items-center">
            <h2>1</h2>
          </div>
          <h1 className="absolute bottom-10 text-sm text-zinc-900 font-medium">
            Confirmar
          </h1>
        </div>
        <div className="w-full h-1 bg-zinc-100" />
        <div className="flex flex-col justify-center items-center gap relative">
          <div className="h-8 w-8 flex bg-zinc-200 rounded-full justify-center items-center">
            <h2>2</h2>
          </div>
          <h1 className="absolute bottom-10 text-sm text-zinc-900 font-medium">
            Pagamento
          </h1>
        </div>
        <div className="w-full h-1 bg-zinc-100"></div>
        <div className="flex flex-col justify-center items-center gap relative">
          <div className="h-8 w-8 flex bg-zinc-200 rounded-full justify-center items-center">
            <h2>3</h2>
          </div>
          <h1 className="absolute bottom-10 text-sm text-zinc-900 font-medium">
            Status
          </h1>
        </div>
      </div>
      {steps && steps.find((step) => step.id === currentStep)?.component}
    </section>
  );
}
