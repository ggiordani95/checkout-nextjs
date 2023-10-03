import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-4 sm:p-6 md:p-12 lg:p-16 h-full w-full rounded-lg flex flex-col justify-between">
      {children}
    </div>
  );
}

export default Container;
