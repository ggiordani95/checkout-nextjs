import { useEffect, useState } from "react";
import { StepValue } from "./utils";

function useSteps({ approved }: { approved: boolean }) {
  const [currentStep, setCurrentStep] = useState<StepValue | number>(0);
  const [isLoadingStep, setIsLoadingStep] = useState<boolean>(false);
  const [isApproved, setIsApproved] = useState<boolean>(false);

  useEffect(() => {
    if (approved) setIsApproved(approved);
    return () => {
      setIsApproved(false);
    };
  }, [approved]);

  function handleNextStep() {
    if (currentStep === 2) return;
    if (isApproved) {
      const current = currentStep;
      setIsLoadingStep(true);
      setTimeout(() => {
        setCurrentStep((prev: any) => prev + 1);
        setIsLoadingStep(false);
      }, 1200);
    }
  }
  function handlePreviousStep() {
    if (currentStep === 0) return;
    const current = currentStep;

    setTimeout(() => {
      setCurrentStep((prev: any) => prev - 1);
    }, 600);
  }

  return {
    handleNextStep,
    currentStep,
    handlePreviousStep,
    isLoadingStep,
    isApproved,
  };
}

export default useSteps;
