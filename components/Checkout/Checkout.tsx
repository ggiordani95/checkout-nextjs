"use client";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import CheckoutSteps from "../CheckoutSteps/";
import { steps } from "../Steps/utils";
import useSteps from "../Steps";
import CustomButton from "../Buttons/CustomButton/CustomButton";
import Container from "../Container";

export default function Checkout() {
  const { handlePreviousStep, handleNextStep, currentStep, isLoadingStep } =
    useSteps();

  return (
    <section className="w-full">
      <Container>
        {currentStep > 0 && (
          <button
            onClick={handlePreviousStep}
            className="h-10 w-10 hover:scale-110 transition-all duration-50 rounded-xl bg-gray-700 absolute top-6 md:top-12 flex justify-center items-center"
          >
            <FiChevronLeft size={22} color={"white"} className="mr-1" />
          </button>
        )}
        <CheckoutSteps currentStep={currentStep} />
        {steps && steps[currentStep].component}
        <div className="w-full 2xl:px-32 py-8">
          {steps[currentStep].button_text && (
            <CustomButton
              clicked={isLoadingStep}
              onClick={() => handleNextStep()}
              text={steps[currentStep].button_text}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
