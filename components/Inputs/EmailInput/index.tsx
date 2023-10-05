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
        onChange={(event) => {
          let isHandleApproved = handleChange(event, setInputValue, setIsError);
          if (isHandleApproved === "approved") {
            props.confirmed(true);
          } else {
            props.confirmed(false);
          }
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
