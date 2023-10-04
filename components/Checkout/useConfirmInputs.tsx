import { steps } from "../Steps/utils";

type TUseConfirmCheckout = {
  currentStep: number;
};

function useConfirmCheckout({ currentStep }: TUseConfirmCheckout) {
  let isValid = steps?.[currentStep]?.validInputs;
  return { isValid };
}

export default useConfirmCheckout;
