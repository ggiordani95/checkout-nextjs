import React, { useEffect, useState } from "react";
import EmailInput from "../../Inputs/EmailInput";
import CardInformation from "../../CardInformation";
import CountryInput from "../../Inputs/CountryInput";
import { countryOptions } from "../utils";
import useSteps from "..";

function Shipping() {
  const handleSelectCountry = (country: any) => {};

  return (
    <section className="w-full 2xl:px-32" id="shipping">
      <div className="my-8">
        <CardInformation />
      </div>
      <div className="my-8">
        <EmailInput
          title={"Nome no cartão"}
          placeholder="Digite o nome impresso no cartão..."
        />
      </div>
      <div className="my-8">
        <CountryInput
          title={"País ou Região"}
          options={countryOptions}
          onSelect={handleSelectCountry}
        />
      </div>
    </section>
  );
}

export default Shipping;
