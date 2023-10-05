import React, { useState } from "react";
import { IEmailInput, TIsError } from "./types";
import { useContextSteps } from "@/context/useContextInputs/useContextSteps";

function EmailInput({ ...props }: IEmailInput) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isError, setIsError] = useState<TIsError>({
    message: false,
    valid: false,
  });
  const context = useContextSteps();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    setIsError: React.Dispatch<React.SetStateAction<TIsError>>
  ) => {
    const result = event.target.value.toLowerCase();

    if (result.length === 0) {
      setIsError({ message: false, valid: false });
    }
    setInputValue(result);
    if (result.length > 6) {
      if (result.includes("@")) {
        setIsError({ message: false, valid: true });
        context.setterValidInputs(true, "email");
      } else {
        setIsError({ message: true, valid: false });
      }
    } else {
      context.setterValidInputs(false, "email");
      setIsError({ message: false, valid: false });
    }
  };

  return (
    <div className="w-full">
      <p className="text-sm text-zinc-600 font-medium p-1 pl-0 bg-white">
        {props.title}
      </p>
      <input
        type="text"
        value={inputValue}
        placeholder={props.placeholder}
        onChange={(event) => {
          handleChange(event, setInputValue, setIsError);
        }}
        className="border-black text-black text-md border-2 border-opacity-10 shadow-md w-full h-14 pl-4 focus:outline-blue-600 rounded-lg"
      />
      {isError.message && (
        <p className="text-sm text-gray-500 mt-2 font-light tracking-tighter ml-1 pl-0 ">
          Por favor digite um e-mail válido
        </p>
      )}
    </div>
  );
}

export default EmailInput;
