import { StepValue } from "../Steps/utils";

function useGetSteps() {
  function getStepClass(
    stepNumber: StepValue,
    currentStep: StepValue | number
  ) {
    return `h-8 w-8 flex ${
      stepNumber === currentStep ? "bg-gray-800" : "bg-zinc-200"
    } rounded-full justify-center items-center`;
  }
  return { getStepClass };
}

export default useGetSteps;
