import React from "react";
import Image from "next/image";
import volvo from "../public/assets/volvo.png";

function BackgroundTheme() {
  return (
    <section className="  w-full shadow-md flex flex-col justify-center items-center bg-gray-800  ">
      <div className="flex mb-0 w-full justify-start flex-row gap-4 p-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 md:justify-center items-center lg:mb-24">
        <Image
          src={volvo}
          width={85}
          height={85}
          alt={"airpods"}
          priority={true}
          className="rounded-3xl select-none"
        />
        <div className="py-4 rounded-t-2xl">
          <h1 className="text-xl text-gray-400 font-semibold select-none">
            AIRPODS
          </h1>
          <h1 className="text-md text-gray-500 font-regular select-none">
            Headset super confortável
          </h1>
        </div>
      </div>
    </section>
  );
}

export default BackgroundTheme;
