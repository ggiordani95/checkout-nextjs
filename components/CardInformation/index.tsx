import React from "react";
import DateCardInput from "../Inputs/DateCardInput";
import CVCInput from "../Inputs/CVCInput";
import CardNumber from "../Inputs/CardNumber";

function CardInformation() {
  return (
    <>
      <p className="text-sm text-zinc-600 font-medium bg-white p-1 pl-0">
        Informações do cartão
      </p>
      <CardNumber
        placeholder={"1234 1234 1234 1234"}
        inputTailwind={"rounded-tr-md rounded-tl-md"}
        id={"number"}
      />
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
    </>
  );
}

export default CardInformation;
