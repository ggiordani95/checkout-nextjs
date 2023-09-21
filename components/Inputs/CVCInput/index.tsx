import React, { useState } from "react";
import { TCVCInput } from "./types";

function CVCInput({ placeholder, inputTailwind, id }: TCVCInput) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, "");
    setInputValue(result);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        maxLength={3}
        id={id}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border-black text-md text-black border-2 border-opacity-10 shadow-md w-full h-14 pl-4 focus:outline-blue-600 ${inputTailwind}`}
      />
    </div>
  );
}

export default CVCInput;
