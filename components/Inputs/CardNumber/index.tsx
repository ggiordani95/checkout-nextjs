import React from "react";
import { TCardNumber } from "./types";
import Image from "next/image";
import { useCardNumberFunctions } from "./CardNumberFunctions";

function CardNumber({ placeholder, inputTailwind, id }: TCardNumber) {
  const { inputValue, cardFlag, handleChange, maxLength } =
    useCardNumberFunctions();
  return (
    <div className="relative">
      <div className="h-full">
        <div className="w-full">
          <input
            type="text"
            maxLength={maxLength}
            id={id}
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            className={`border-black text-md text-black border-2 border-opacity-10 shadow-md w-full h-14 pl-4 focus:outline-blue-600 ${inputTailwind}`}
          />
        </div>
        <div className="absolute right-4 top-0 flex flex-row gap-1 justify-center items-center h-full">
          <Image
            src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
            style={{ width: "auto", height: "auto" }}
            width={32}
            height={32}
            alt={"visa"}
            priority={true}
            className={`${
              cardFlag === "VISA" || cardFlag === null
                ? "grayscale-1"
                : "grayscale"
            }`}
          />
          <Image
            src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"
            width={32}
            height={32}
            style={{ width: "auto", height: "auto" }}
            alt={"mastercard"}
            priority={true}
            className={`${
              cardFlag === "MASTERCARD" || cardFlag === null
                ? "grayscale-1"
                : "grayscale"
            }
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default CardNumber;
