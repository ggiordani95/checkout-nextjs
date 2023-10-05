import { useContextSteps } from "@/context/useContextInputs/useContextSteps";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoBagCheck } from "react-icons/io5";

function Confirmation() {
  const context = useContextSteps();
  return (
    <section className="w-full 2xl:px-32 mb-8" id="confirmation">
      <div className="flex flex-col text-zinc-500 h-full justify-center ">
        <div className="flex justify-center items-center flex-col gap-2">
          <IoBagCheck size={48} color={"#6cc25c"} className="rounded-md mb-4" />
          <h1 className="text-xl font-medium tracking-tight ">
            Pedido Confirmado com Sucesso!
          </h1>
          <p className="text-center max-w-md font-regular text-md tracking-tight">
            Você receberá um email de confirmação da compra e rastreamento do
            produto.
          </p>
        </div>
        <div className="flex flex-row w-full items-center justify-center gap-2 border-b-slate-200 border-t-0 border-l-0 border-r-0 py-4 border"></div>
        <div className="flex flex-row w-full items-center justify-center gap-2 py-8 ">
          <div className="p-2 bg-zinc-100 rounded-full">
            <HiOutlineMail size={24} color={"#838383"} className="rounded-md" />
          </div>
          <h1 className="font-sm">{context.userEmail}</h1>
        </div>
      </div>
    </section>
  );
}

export default Confirmation;
