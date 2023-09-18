import React, { useState } from 'react'

type TSingleNumberInput = {
    title?: string,
    placeholder?: string
    inputTailwind?: string
}

function SingleNumberInput({title, placeholder,inputTailwind}: TSingleNumberInput) {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const result = event.target.value.replace(/\D/g, '');
        setInputValue(result);
    };

  return (
    <div className='w-full'>
        {title && <p className='text-sm text-zinc-600 font-semibold p-1 pl-0 bg-white'>{title}</p>}
        <input type="text" value={inputValue} onChange={handleChange} placeholder={placeholder} className={`border-black text-md text-black border-2 border-opacity-10 shadow-md w-full h-12 pl-4 focus:outline-blue-600 ${inputTailwind}`}/>
    </div>
    )
}

export default SingleNumberInput