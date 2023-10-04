import { TSteps } from "../Steps/utils";

type TUseCurrentComponent = {
  currentStep: number;
  steps: Array<TSteps>;
};

function useCurrentComponent({ currentStep, steps }: TUseCurrentComponent) {
  const CurrentStepComponent = steps?.[currentStep]?.component;
  return CurrentStepComponent;
}

export default useCurrentComponent;
