import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

type TCustomButton = {
  onClick: () => void;
  priceToPay: string;
};

function CustomButton({ onClick, priceToPay }: TCustomButton) {
  const [isLoading, setisLoading] = useState<boolean>(true);

  return (
    <button className="h-16 rounded-lg w-full  bg-blue-700" onClick={onClick}>
      {isLoading ? (
        <ClipLoader color="#8e78ff" loading={true} size={20} className="mt-2" />
      ) : (
        <p className="text-white text-md font-normal">Pagar {priceToPay}</p>
      )}
    </button>
  );
}

export default CustomButton;
