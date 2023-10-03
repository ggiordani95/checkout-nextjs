import React, { useEffect, useState } from "react";
import { StepValue } from "../Steps/utils";

type TCheckoutSteps = {
  currentStep: StepValue | number;
};

function CheckoutSteps({ currentStep }: TCheckoutSteps) {
  const [step, setStep] = useState<StepValue | number>(0);

  useEffect(() => {
    setStep(currentStep);
  }, [currentStep]);

  function getStepClass(
    stepNumber: StepValue,
    currentStep: StepValue | number
  ) {
    return `h-8 w-8 flex ${
      stepNumber === currentStep ? "bg-gray-800" : "bg-zinc-200"
    } rounded-full justify-center items-center`;
  }

  return (
    <div className="flex flex-row items-center py-12 px-4 2xl:px-48 mt-12 select-none">
      <div className="flex flex-col justify-center items-center gap relative">
        <div className={getStepClass(0, step)}>
          <h2>1</h2>
        </div>
        <h1 className="absolute bottom-10 text-sm text-zinc-900 font-medium">
          Confirmar
        </h1>
      </div>
      <div className="w-full h-1 bg-zinc-100" />
      <div className="flex flex-col justify-center items-center gap relative">
        <div className={getStepClass(1, step)}>
          <h2>2</h2>
        </div>
        <h1 className="absolute bottom-10 text-sm text-zinc-900 font-medium">
          Pagamento
        </h1>
      </div>
      <div className="w-full h-1 bg-zinc-100"></div>
      <div className="flex flex-col justify-center items-center gap relative">
        <div className={getStepClass(2, step)}>
          <h2>3</h2>
        </div>
        <h1 className="absolute bottom-10 text-sm text-zinc-900 font-medium">
          Status
        </h1>
      </div>
    </div>
  );
}

export default CheckoutSteps;
