import React, { FC, useState } from "react";
import Image from "next/image";
import { CountryOption, ICountryInput } from "./types";

function CountryInput({ options, title }: ICountryInput) {
  const [isOpen, setIsOpen] = useState(false);
  const [alreadyOpened, setIsAlreadyOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CountryOption | null>(
    null
  );

  const handleSelect = (option: CountryOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    setIsAlreadyOpened(true);
  };

  return (
    <div className="relative w-full">
      <p className="text-sm text-zinc-600 font-medium p-1 pl-0 bg-white">
        {title}
      </p>
      <button
        onClick={() => {
          if (!alreadyOpened) setIsOpen(true);
        }}
        disabled={isOpen && true}
        className="border-black text-zinc-600 text-md border-2 border-opacity-10 shadow-md w-full h-14 focus:outline-blue-600 rounded-lg pl-4"
      >
        {selectedOption ? (
          <div className="w-full flex flex-row gap-2 h-full items-center">
            <Image
              src={`/assets/brazil.png`}
              width="24"
              height="24"
              alt="Brazil"
              className="rounded-lg"
            />
            <h1>{selectedOption.name}</h1>
          </div>
        ) : (
          <h1 className="text-zinc-400 font-normal w-full text-start">
            Selecione seu país
          </h1>
        )}
      </button>
      {isOpen && (
        <ul className="absolute mt-1 py-2 bg-white border border-gray-300 rounded-md shadow-lg w-full flex flex-col gap-2">
          {options.map((option: any) => (
            <li
              key={option.code}
              onClick={() => handleSelect(option)}
              className="px-4 gap-2 flex items-center py-2  cursor-pointer text-zinc-400"
            >
              <Image
                src={`/assets/brazil.png`}
                width="24"
                height="24"
                alt="Brazil"
                className="rounded-lg"
              />
              <h1>{option.name}</h1>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountryInput;
