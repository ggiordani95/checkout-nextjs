import { useState } from "react";
import { PIN_CARDS } from "../types";
import { useContextSteps } from "@/context/useContextInputs/useContextSteps";

export function useCardNumberFunctions() {
  const maxLength = 19;

  const [inputValue, setInputValue] = useState("");
  const [cardFlag, setCardFlag] = useState<string | null>(null);

  const context = useContextSteps();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (value.length === maxLength) {
      context.setterValidInputs(true, "card");
    } else {
      context.setterValidInputs(false, "card");
    }
    value = value.replace(/\s/g, "");
    value = value.replace(/\D/g, "");
    if (!event.target.value) {
      setCardFlag(null);
    }
    for (const CARD in PIN_CARDS) {
      if (value === PIN_CARDS[CARD]) {
        setCardFlag(CARD.toString());
        break;
      }
    }
    const formattedValue = value.match(/.{1,4}/g);
    if (formattedValue !== null) {
      setInputValue(formattedValue.join(" "));
    } else {
      setInputValue("");
    }
  };

  return { inputValue, cardFlag, handleChange, maxLength };
}
