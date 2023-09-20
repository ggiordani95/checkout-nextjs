import React from "react";

type THeaderText = {
  text: string;
};

function HeaderText({ text }: THeaderText) {
  return (
    <div className="flex flex-row w-full just-center items-center">
      <span className="h-0.5 w-full bg-slate-200 rounded-full"></span>
      <h1 className="text-md text-slate-400 font-light w-1/2 text-center">
        {text}
      </h1>
      <span className="h-0.5 w-full bg-slate-200 rounded-full"></span>
    </div>
  );
}

export default HeaderText;
