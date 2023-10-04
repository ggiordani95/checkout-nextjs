import React, { useState } from "react";
import handleChange from "./utils";
import { IEmailInput, TIsError } from "./types";

function EmailInput({ ...props }: IEmailInput) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isError, setIsError] = useState<TIsError>({
    message: false,
    valid: false,
  });

  return (
    <div className="w-full">
      <p className="text-sm text-zinc-600 font-medium p-1 pl-0 bg-white">
        {props.title}
      </p>
      <input
        type="text"
        value={inputValue}
        placeholder={props.placeholder}
        onChange={(event) => handleChange(event, setInputValue, setIsError)}
        className="border-black text-black text-md border-2 border-opacity-10 shadow-md w-full h-14 pl-4 focus:outline-blue-600 rounded-lg"
      />
      {isError.message && (
        <p className="text-sm text-zinc-600 font-medium p-1 pl-0 bg-white">
          Email inválido
        </p>
      )}
    </div>
  );
}

export default EmailInput;
