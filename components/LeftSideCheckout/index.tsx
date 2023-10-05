import React from "react";
import Image from "next/image";
import airpods from "../../public/assets/airpods.png";
import useSocials from "./utils/useIcons";
import { TSocial } from "./types";

function LeftSideCheckout() {
  const { socials } = useSocials();

  return (
    <section className="p-1 sm:p-0 relative w-full shadow-md flex flex-row-reverse sm:flex-col  justify-center items-center bg-gray-800">
      <div className="text-gray-400 sm:absolute top-10 left-10 text-sm flex gap-1 flex-row justify-center items-center">
        <div className="hover:scale-105 transition-all duration-100 hidden hover:text-white md:block">
          <h1>Checkout por </h1>
          <h2 className="">
            <b>Gustavo Giordani</b>
          </h2>
        </div>
        <div className="md:ml-4 flex flex-row bg-gray-900 p-4 gap-4 rounded-full">
          {socials.map((social: TSocial) => (
            <>
              <div className="flex justify-center items-center">
                <a
                  href={social.url}
                  target="_blank"
                  className="flex flex-row gap-2 justify-center items-center"
                >
                  {social.icon}
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="flex p-2 mb-0 w-full justify-start flex-row gap-4 sm:p-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 md:justify-center items-center lg:mb-24">
        <Image
          src={airpods}
          width={85}
          height={85}
          alt={"airpods"}
          priority={true}
          className="rounded-3xl select-none"
        />
        <div className="py-4 rounded-t-2xl">
          <h1 className="sm:text-xl text-gray-400 font-semibold select-none">
            AirPods 3a geração
          </h1>
          <h1 className="sm:text-md text-gray-500 font-regular select-none">
            Headset super confortável
          </h1>
        </div>
      </div>
    </section>
  );
}

export default LeftSideCheckout;
