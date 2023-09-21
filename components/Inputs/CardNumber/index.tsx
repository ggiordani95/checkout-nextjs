import React, { useState } from "react";
import { TCardNumber } from "./types";
import Image from "next/image";

function CardNumber({ placeholder, inputTailwind, id }: TCardNumber) {
  const [inputValue, setInputValue] = useState<string>("");
  const [cardFlag, setCardFlag] = useState<string | null>(null);

  const maxLength = 16;

  type CardType = {
    [key: string]: string;
  };

  const PIN_CARDS: CardType = {
    VISA: "4",
    MASTERCARD: "5",
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let result = event.target.value;
    if (event.target.value === "") setCardFlag(null);
    for (const CARD in PIN_CARDS) {
      if (result === PIN_CARDS[CARD]) {
        setCardFlag(CARD.toString());
        console.log(cardFlag);
        break;
      }
    }
    result = event.target.value.replace(/\D/g, "");
    if (result.length === maxLength) {
      const modifiedValue =
        result.slice(0, maxLength / 4) +
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
            width={32}
            height={32}
            alt={"visa"}
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
            alt={"mastercard"}
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
