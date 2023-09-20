import React, { useState } from "react";
import HeaderText from "../HeaderText";
import SingleTextInput from "../SingleTextInput";
import CardInformation from "../CardInformation";
import CustomButton from "../CustomButton";

function ShippingInfo() {
  
  const [isLoadingPayment, setIsLoadingPayment] = useState<boolean>(false);

  return (
    <section className="w-full" id="shipping">
      <HeaderText text="Pagar com o cartão" />
      <div className="my-6">
        <SingleTextInput
          title={"Email"}
          placeholder="Digite seu email de uso..."
        />
      </div>
      <div className="my-6">
        <CardInformation />
      </div>
      <div className="my-6">
        <SingleTextInput
          title={"Nome no cartão"}
          placeholder="Digite o nome impresso no cartão..."
        />
      </div>
      <div className="my-6">
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
