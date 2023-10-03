"use client";
import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import CheckoutSteps from "./CheckoutSteps";
import { StepValue, steps } from "./Steps/utils";
import CustomButton from "./CustomButton";

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState<StepValue | number>(1);
  const [isLoadingPayment, setIsLoadingPayment] = useState<boolean>(false);

  function handleNextStep() {
    if (currentStep === 3) return;
    const current = currentStep;
    setIsLoadingPayment(true);
    setTimeout(() => {
      setCurrentStep((prev: any) => prev + 1);
      setIsLoadingPayment(false);
    }, 400);
  }
  function handlePreviousStep() {
    if (currentStep === 1) return;
    const current = currentStep;
    setTimeout(() => {
      setCurrentStep((prev: any) => prev - 1);
    }, 400);
  }

  return (
    <section className="relative p-4 sm:p-6 md:p-12 lg:p-16  w-full shadow-md rounded-lg flex flex-col justify-center">
      <button
        onClick={handlePreviousStep}
        className="h-12 w-12 rounded-full bg-gray-700 absolute top-8 flex justify-center items-center"
      >
        <FiChevronLeft size={22} color={"white"} className="mr-1" />
      </button>
      <CheckoutSteps currentStep={currentStep} />
      {steps && steps.find((step) => step.id === currentStep)?.component}
      <div className="w-full 2xl:px-32 py-12">
        <CustomButton
          clicked={isLoadingPayment}
          onClick={() => handleNextStep()}
          priceToPay="R$250,00"
        />
      </div>
    </section>
  );
}
