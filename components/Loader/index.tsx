import React from "react";
import { SkewLoader } from "react-spinners";

function index() {
  return (
    <section
      className="w-full 2xl:px-32 flex justify-center items-center"
      id="loader"
    >
      <SkewLoader
        speedMultiplier={1.2}
        size={24}
        color="#172554"
        loading={true}
      />
    </section>
  );
}

export default index;
