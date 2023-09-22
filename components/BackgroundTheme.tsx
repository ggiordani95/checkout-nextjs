import React from "react";
import Image from "next/image";
import jbl from "../public/assets/jbl.jpg";
import logo from "../public/assets/jblogo.jpg";

function BackgroundTheme() {
  return (
    <section className="  w-full shadow-md rounded-lg flex flex-col  bg-slate-50">
      <div className="p-4 sm:p-6 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-xl text-gray-800 font-semibold">JBL STORE</h1>
          <h1 className="text-xl text-gray-500 font-regular">
            Headset super confortável
          </h1>
        </div>

        <Image
          src={jbl}
          width={400}
          height={400}
          alt={"t-shirt"}
          className="rounded-full"
        />
        <h1 className="text-xl text-gray-600 font-medium my-10">
          Preço: R$ 250,00
        </h1>
      </div>
    </section>
  );
}

export default BackgroundTheme;
