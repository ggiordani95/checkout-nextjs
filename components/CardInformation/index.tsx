import React from "react";
import Image from "next/image";
import DateCardInput from "../Inputs/DateCardInput";
import CVCInput from "../Inputs/CVCInput";
import CardNumber from "../Inputs/CardNumber";

function CardInformation() {
  return (
    <>
      <p className="text-sm text-zinc-600 font-medium bg-white p-1 pl-0">
        Informações do cartão
      </p>
      <div className="relative">
        <div className="h-full">
          <CardNumber
            placeholder={"1234 1234 1234 1234"}
            inputTailwind={"rounded-tr-md rounded-tl-md"}
            id={"number"}
          />
          <div className="absolute right-4 top-0 flex flex-row gap-1 justify-center items-center h-1/2">
            <Image
              src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
              width={32}
              height={32}
              alt={""}
            />
            <Image
              src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"
              width={32}
              height={32}
              alt={""}
            />
          </div>
        </div>

        <div className="flex flex-row">
          <DateCardInput
            placeholder={"MM/YY"}
            inputTailwind={"rounded-bl-md border-t-0 border-r-1"}
            id={"date"}
          />
          <CVCInput
            placeholder={"CVC"}
            inputTailwind={"rounded-br-md border-t-0 border-l-0"}
            id={"cvc"}
          />
        </div>
      </div>
    </>
  );
}

export default CardInformation;
