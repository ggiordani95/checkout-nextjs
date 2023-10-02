import React, { useState } from "react";
import SingleTextInput from "../Inputs/SingleTextInput";
import CardInformation from "../CardInformation";
import CustomButton from "../CustomButton";

function ShippingInfo() {
  const [isLoadingPayment, setIsLoadingPayment] = useState<boolean>(false);

  return (
    <section className="w-full 2xl:px-32" id="shipping">
      <div className="mb-4">
        <SingleTextInput
          title={"Email"}
          placeholder="Digite seu email de uso..."
        />
      </div>
      <div className="my-4">
        <CardInformation />
      </div>
      <div className="my-4">
        <SingleTextInput
          title={"Nome no cartão"}
          placeholder="Digite o nome impresso no cartão..."
        />
      </div>
      <div className="my-4">
        <SingleTextInput title={"País ou região"} />
      </div>
      <div className="my-12">
        <CustomButton
          clicked={isLoadingPayment}
          onClick={() => setIsLoadingPayment(true)}
          priceToPay="R$250,00"
        />
      </div>
    </section>
  );
}

export default ShippingInfo;
