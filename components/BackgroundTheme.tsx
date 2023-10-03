import React from "react";
import Image from "next/image";
import volvo from "../public/assets/volvo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function BackgroundTheme() {
  return (
    <section className="relative w-full shadow-md flex flex-col justify-center items-center bg-gray-800">
      <div className="text-gray-400 absolute top-10 left-10 text-sm flex gap-1 flex-row justify-center items-center">
        <h1>Checkout por </h1>
        <h2 className="hover:scale-95 transition-all duration-100">
          <b>Gustavo Giordani</b>
        </h2>
        <div className="ml-4 flex flex-row bg-slate-700 p-4 rounded-full">
          <div className="flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/gustavo-giordani/"
              target="_blank"
              className="flex flex-row gap-2 justify-center items-center"
            >
              <FaLinkedin
                size={22}
                color={"#8e8e96"}
                className={" hover:scale-125 transition-all duration-200"}
              />
              <p className="text-sm">Linkedin</p>
            </a>
          </div>
          <div className="ml-4 flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/gustavo-giordani/"
              target="_blank"
              className="flex flex-row gap-2 justify-center items-center"
            >
              <FaGithub
                size={22}
                color={"#8e8e96"}
                className={" hover:scale-125 transition-all duration-200"}
              />
              <p className="text-sm">Github</p>
            </a>
          </div>
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

export default BackgroundTheme;
