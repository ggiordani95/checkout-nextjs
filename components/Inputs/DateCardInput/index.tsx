import React, { useContext, useState } from "react";
import { TDateCardInput } from "./types";
import { useContextSteps } from "@/context/useContextInputs/useContextSteps";

function DateCardInput({ placeholder, inputTailwind, id }: TDateCardInput) {
  const [inputValue, setInputValue] = useState("");

  const context = useContextSteps();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let result = event.target.value;
    result = event.target.value.replace(/\D/g, "");
    if (result.length > 2) {
      const modifiedValue = result.slice(0, 2) + "/" + result.slice(2);
      result = modifiedValue;
      context.setterValidInputs(true, "date");
    } else {
      context.setterValidInputs(false, "date");
    }
    setInputValue(result);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        maxLength={5}
        id={id}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border-black text-md text-black border-2 border-opacity-10 shadow-md w-full h-14 pl-4 focus:outline-blue-600 ${inputTailwind}`}
      />
    </div>
  );
}

export default DateCardInput;
