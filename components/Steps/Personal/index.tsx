import React from "react";
import apple from "../../../public/assets/apple.jpg";
import Image from "next/image";

function Personal() {
  return (
    <div className="w-full 2xl:px-32 py-12">
      <div className="flex flex-row">
        <Image src={apple} width={32} height={32} alt={"apple"} />
        <h1>Apple Store</h1>
      </div>
    </div>
  );
}

export default Personal;
