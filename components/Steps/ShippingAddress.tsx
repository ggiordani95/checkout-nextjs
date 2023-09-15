import React from "react";
import HeaderText from "../HeaderText";
import SingleTextInput from "../SingleTextInput";
import DoubleTextInput from "../DoubleTextInput";

function ShippingAddress() {
  return (
    <section className="p-6 w-3/6 shadow-zinc-400 shadow-md" id="shipping">
      <HeaderText text="Endereço de Entrega" />
      <DoubleTextInput
        input1={{ title: "Nome", placeholder: "Digite seu nome..." }}
        input2={{ title: "Sobrenome", placeholder: "Digite seu sobrenome..." }}
      />
      <SingleTextInput title={"Email"} placeholder={"Digite seu email..."} />
      <SingleTextInput title={"Endereço"} placeholder={"Digite seu endereço..."} />
    </section>
  );
}

export default ShippingAddress;
