import React from "react";
import Image from "next/image";
import volvo from "../../public/assets/volvo.png";
import useSocials from "./utils/useIcons";
import { TSocial } from "./types";

function LeftSideCheckout() {
  const { socials } = useSocials();

  return (
    <section className="relative w-full shadow-md flex flex-col justify-center items-center bg-gray-800">
      <div className="text-gray-400 absolute top-10 left-10 text-sm flex gap-1 flex-row justify-center items-center">
        <div className="hover:scale-105 transition-all duration-100 hover:text-white">
          <h1>Checkout por </h1>
          <h2 className="">
            <b>Gustavo Giordani</b>
          </h2>
        </div>
        <div className="ml-4 flex flex-row bg-slate-700 p-4 gap-2 rounded-full">
          {socials.map((social: TSocial) => (
            <>
              <div className="flex justify-center items-center">
                <a
                  href={social.url}
                  target="_blank"
                  className="flex flex-row gap-2 justify-center items-center"
                >
                  {social.icon}
                  <p className="text-sm hover:text-white hover:scale-105">
                    {social.name}
                  </p>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
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

export default LeftSideCheckout;
