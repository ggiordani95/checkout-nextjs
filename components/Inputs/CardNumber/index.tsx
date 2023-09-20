import React, { useState } from "react";
import { TCardNumber } from "./types";

function CardNumber({ placeholder, inputTailwind, id }: TCardNumber) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let result = event.target.value;
    result = event.target.value.replace(/\D/g, "");
    if (result.length === 16) {
      const modifiedValue =
        result.slice(0, 4) +
        " " +
        result.slice(4, 8) +
        " " +
        result.slice(8, 12) +
        " " +
        result.slice(12, 16);
      result = modifiedValue;
    }
    setInputValue(result);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        maxLength={16}
        id={id}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border-black text-md text-black border-2 border-opacity-10 shadow-md w-full h-12 pl-4 focus:outline-blue-600 ${inputTailwind}`}
      />
    </div>
  );
}

export default CardNumber;
