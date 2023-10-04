"use client";
import React, { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import CheckoutSteps from "../CheckoutSteps/";
import { steps } from "../Steps/utils";
import useSteps from "../Steps";
import CheckoutButton from "../Buttons/CheckoutButton";
import Container from "../Container";
import Loader from "../Loader";

export default function Checkout() {
  const [isCheckoutApproved, setIsCheckoutApproved] = useState<boolean>(false);

  const { handlePreviousStep, handleNextStep, currentStep, isLoadingStep } =
    useSteps();

  const CurrentStepComponent = steps?.[currentStep]?.component;

  useEffect(() => {
    setIsCheckoutApproved(isCheckoutApproved);
  }, [isCheckoutApproved]);

  return (
    <section className="w-full justify-center">
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
        {steps && !isLoadingStep ? CurrentStepComponent : <Loader />}
        <div className="w-full 2xl:px-32 py-8">
          {steps[currentStep].button_text && (
            <CheckoutButton
              approved={isLoadingStep}
              onClick={() => {
                handleNextStep(isCheckoutApproved);
              }}
              text={steps[currentStep].button_text}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
