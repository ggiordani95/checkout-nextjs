import React from "react";
import Image from "next/image";

function BackgroundTheme() {
  return (
    <section className="w-full bg-slate-100 p-4 lg:p-36">
      <Image
        src="https://imgnike-a.akamaihd.net/768x768/02541615.jpg"
        width={320}
        height={320}
        alt={"t-shirt"}
      />
    </section>
  );
}

export default BackgroundTheme;
