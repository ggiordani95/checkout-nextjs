import { useEffect, useState } from "react";

type TUseConfirmCheckout = {
  currentStep: number;
  isValidComp?: boolean;
};

function useConfirmInputs({ currentStep, isValidComp }: TUseConfirmCheckout) {
  const [isValidInputs, setIsValidInputs] = useState<boolean | undefined>(
    false
  );

  useEffect(() => {
    setIsValidInputs(isValidComp);
  }, [isValidComp]);

  return isValidInputs;
}

export default useConfirmInputs;
