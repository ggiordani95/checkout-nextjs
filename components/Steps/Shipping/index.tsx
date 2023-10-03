import React from "react";
import EmailInput from "../../Inputs/EmailInput";
import CardInformation from "../../CardInformation";

import CountryInput from "../../Inputs/CountryInput";
import { countryOptions } from "../utils";

function Shipping() {
  const handleSelectCountry = (country: any) => {
    console.log("Selected country:", country);
  };

  return (
    <section className="w-full 2xl:px-32" id="shipping">
      <div className="mb-4">
        <EmailInput title={"Email"} placeholder="Digite seu email de uso..." />
      </div>
      <div className="my-4">
        <CardInformation />
      </div>
      <div className="my-4">
        <EmailInput
          title={"Nome no cartão"}
          placeholder="Digite o nome impresso no cartão..."
        />
      </div>
      <div className="my-4">
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
