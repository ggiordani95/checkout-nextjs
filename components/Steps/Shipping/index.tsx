import React, { useEffect, useState } from "react";
import CardInformation from "../../CardInformation";
import CountryInput from "../../Inputs/CountryInput";
import { countryOptions } from "../utils";
import NameInput from "@/components/Inputs/NameInput";

function Shipping() {
  const handleSelectCountry = (country: any) => {};

  const [confirmedInputs, setConfirmedInputs] = useState<Object>({});

  return (
    <section className="w-full 2xl:px-32" id="shipping">
      <div className="my-8">
        <CardInformation confirmed={true} />
      </div>
      <div className="my-8">
        <NameInput
          title={"Nome no cartão"}
          placeholder="Digite o nome impresso no cartão..."
          confirmed={(value) => {
            setConfirmedInputs({ ...confirmedInputs, email: value });
          }}
        />
      </div>
      <div className="my-8">
        <CountryInput
          title={"País ou Região"}
          options={countryOptions}
          onSelect={handleSelectCountry}
          confirmed={(value) => {
            setConfirmedInputs({ ...confirmedInputs, country: value });
          }}
        />
      </div>
    </section>
  );
}

export default Shipping;
