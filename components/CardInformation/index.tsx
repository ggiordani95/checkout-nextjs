import React from "react";
import SingleNumberInput from "../SingleNumberInput";

function CardInformation() {
  return (
    <>
      <p className="text-md text-zinc-600 font-medium bg-white p-1 pl-0">
        Informações do cartão
      </p>
      <div className="">
        <SingleNumberInput placeholder={"1234 1234 1234 1234"} inputTailwind={'rounded-tr-md rounded-tl-md'}/>
        <div className="flex flex-row">
            <SingleNumberInput placeholder={"MM/YY"} inputTailwind={'rounded-bl-md border-t-0 border-r-1'}/>
            <SingleNumberInput placeholder={"CVC"} inputTailwind={'rounded-br-md border-t-0 border-l-0'}/>   
        </div>
      </div>
     
    </>
  );
}

export default CardInformation;
