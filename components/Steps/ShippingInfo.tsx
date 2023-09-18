import React from "react";
import HeaderText from "../HeaderText";
import SingleTextInput from "../SingleTextInput";
import SingleNumberInput from "../SingleNumberInput";
import CardInformation from "../CardInformation";

function ShippingInfo() {
  return (
    <section className="w-full" id="shipping">
      <HeaderText text="Stripe de Pagamento" />
      <div className="my-6">
        <SingleTextInput title={"Email"} />
      </div>
      <div className="my-6">
        <CardInformation/>
      </div>
    </section>
  );
}

export default ShippingInfo;
