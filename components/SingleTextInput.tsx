import React, { useState } from 'react'

type ISingleTextInput = {
  title?: string,
}

function SingleTextInput({title}: ISingleTextInput) {

  const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const result = event.target.value.replace(/\d+/g, '');
        setInputValue(result);
    };
    
  return (
    <div className='w-full'>
      <p className='text-md text-zinc-600 font-medium p-1 pl-0 bg-white'>{title}</p>
      <input type="text" value={inputValue} onChange={handleChange} className="border-black text-black text-sm border-2 border-opacity-10 shadow-lg w-full h-12 pl-2 focus:outline-blue-600 rounded-lg"/>
    </div>
  )
}

export default SingleTextInput