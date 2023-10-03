import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type TCustomButton = {
  onClick: () => void;
  text: string | null;
  clicked: boolean;
};

function CustomButton({ onClick, text, clicked }: TCustomButton) {
  const [isLoading, setisLoading] = useState<boolean>(false);

  useEffect(() => {
    if (clicked) setisLoading(true);
    return () => {
      setisLoading(false);
    };
  }, [clicked]);

  return (
    <button className="h-16 rounded-lg w-full  bg-gray-800" onClick={onClick}>
      {isLoading ? (
        <ClipLoader color="#8e78ff" loading={true} size={20} className="mt-2" />
      ) : (
        <p className="text-blue-200 text-md font-normal">{text}</p>
      )}
    </button>
  );
}

export default CustomButton;
