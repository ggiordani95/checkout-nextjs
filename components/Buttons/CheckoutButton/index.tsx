import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type TCheckoutButton = {
  onClick: () => void;
  text: string | null;
  approved: boolean;
};

function CheckoutButton({ onClick, text, approved }: TCheckoutButton) {
  const [isLoading, setisLoading] = useState<boolean>(false);

  useEffect(() => {
    if (approved) setisLoading(true);
    return () => {
      setisLoading(false);
    };
  }, [approved]);

  return (
    <button
      className="h-16 rounded-lg w-full active:scale-95 transition-all duration-75 bg-gray-800"
      onClick={onClick}
    >
      {isLoading ? (
        <ClipLoader color="#8e78ff" loading={true} size={20} className="mt-2" />
      ) : (
        <p className="text-blue-200 text-md font-normal">{text}</p>
      )}
    </button>
  );
}

export default CheckoutButton;
