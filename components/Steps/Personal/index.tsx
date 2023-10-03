import React from "react";
import apple from "../../../public/assets/apple.jpg";
import Image from "next/image";

function Personal() {
  return (
    <div className="w-full h-full 2xl:px-32 py-12">
      <div className="flex flex-col  h-full justify-start">
        <div className="flex flex-row items-center justify-center xl:justify-start gap-4 border-b-slate-200 border-t-0 border-l-0 border-r-0 py-8 border">
          <Image
            src={apple}
            width={32}
            height={32}
            alt={"apple"}
            className="rounded-lg"
          />
          <h1 className="text-zinc-700 font-medium">Apple Store Inc</h1>
        </div>
        <div className="flex gap-8 flex-col xl:flex-row justify-between items-center border-b-slate-200 border-t-0 border-l-0 border-r-0 py-12 border">
          <div className="flex flex-row gap-4 xl:justify-center items-center">
            <div>
              <Image
                src={"https://github.com/ggiordani95.png"}
                width={32}
                height={32}
                alt={"github"}
                className="rounded-lg"
              />
            </div>
            <span>
              <h1 className="text-zinc-500 font-regular">Gustavo Giordani</h1>
              <h2 className="text-zinc-400 font-light">exemplo@gmail.com</h2>
            </span>
          </div>
          <div className="flex flex-row gap-8">
            <h2 className="text-zinc-600 font-light">1 x</h2>
            <h1 className="text-zinc-600 font-light">AirPods 3a geração</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
