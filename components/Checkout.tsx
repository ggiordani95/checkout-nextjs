"use client";
import React, { useState } from "react";
import CheckoutSteps from "./Steps/CheckoutSteps";
import { StepValue, steps } from "./Steps/utils";

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState<StepValue>(1);

  return (
    <section className="p-4 sm:p-6 md:p-12 lg:p-16 xl:p-24 2xl:p-36 w-full shadow-md rounded-lg">
      <CheckoutSteps />
      {steps && steps.find((step) => step.id === currentStep)?.component}
    </section>
  );
}
