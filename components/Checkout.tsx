"use client";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import CheckoutSteps from "./CheckoutSteps";
import { steps } from "./Steps/utils";
import useSteps from "./Steps";
import CustomButton from "./Buttons/CustomButton/CustomButton";

export default function Checkout() {
  const { handlePreviousStep, handleNextStep, currentStep, isLoadingStep } =
    useSteps();

  return (
    <section className="relative p-4 sm:p-6 md:p-12 lg:p-16  w-full shadow-md rounded-lg flex flex-col justify-center">
      {currentStep > 0 && (
        <button
          onClick={handlePreviousStep}
          className="h-10 w-10 rounded-xl bg-gray-700 absolute top-6 flex justify-center items-center"
        >
          <FiChevronLeft size={22} color={"white"} className="mr-1" />
        </button>
      )}
      <CheckoutSteps currentStep={currentStep} />
      {steps && steps[currentStep].component}
      <div className="w-full 2xl:px-32 py-12">
        <CustomButton
          clicked={isLoadingStep}
          onClick={() => handleNextStep()}
          priceToPay="R$250,00"
        />
      </div>
    </section>
  );
}
