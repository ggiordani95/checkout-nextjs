import React, { useState } from "react";

type ISingleTextInput = {
  title?: string;
  placeholder?: string;
};

function SingleTextInput({ title, placeholder }: ISingleTextInput) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\d+/g, "");
    setInputValue(result);
  };

  return (
    <div className="w-full">
      <p className="text-sm text-zinc-600 font-medium p-1 pl-0 bg-white">
        {title}
      </p>
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        className="border-black text-black text-md border-2 border-opacity-10 shadow-md w-full h-14 pl-4 focus:outline-blue-600 rounded-lg"
      />
    </div>
  );
}

export default SingleTextInput;
