import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type TCheckoutButton = {
  onClick: () => void;
  text: string | null;
  loading: boolean;
  approved: boolean;
};

function CheckoutButton({ onClick, text, loading, approved }: TCheckoutButton) {
  const [isLoading, setisLoading] = useState<boolean>(false);

  useEffect(() => {
    if (loading) setisLoading(true);
    return () => {
      setisLoading(false);
    };
  }, [loading]);

  return (
    <button
      className={`h-16 rounded-lg w-full active:scale-95 transition-all duration-75 ${
        approved ? "bg-gray-800" : "bg-zinc-700"
      } `}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <ClipLoader color="#8e78ff" loading={true} size={20} className="mt-2" />
      ) : (
        <p
          className={` ${
            approved ? "text-blue-200" : "text-zinc-300"
          } text-md font-normal`}
        >
          {text}
        </p>
      )}
    </button>
  );
}

export default CheckoutButton;
