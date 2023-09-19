import React from "react";
import HeaderText from "../HeaderText";
import SingleTextInput from "../SingleTextInput";
import CardInformation from "../CardInformation";
import CustomButton from "../CustomButton";

function ShippingInfo() {
  return (
    <section className="w-full" id="shipping">
      <HeaderText text="Pagar com o cartão" />
      <div className="my-6">
        <SingleTextInput title={"Email"} />
      </div>
      <div className="my-6">
        <CardInformation/>
      </div>
      <div className="my-6">
        <SingleTextInput title={"Nome no cartão"} />
      </div>
      <div className="my-6">
        <SingleTextInput title={"País ou região"} />
      </div>
      <div className="my-12">
        <CustomButton onClick={()=> ''} priceToPay="R$250,00" />
      </div>
    </section>
  );
}

export default ShippingInfo;
