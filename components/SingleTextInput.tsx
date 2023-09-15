import React from 'react'

interface ISingleTextInput {
  title: string,
  placeholder: string
}

function SingleTextInput({title,placeholder}: ISingleTextInput) {
  return (
    <div className='h-12 text-black mt-10 w-full'>
      <p className='text-sm text-zinc-600 absolute translate-x-1 translate-y-[-12px] bg-white px-1'>{title}</p>
      <input type="text" placeholder={placeholder} className='border-black text-sm border border-opacity-30 w-full h-full pl-2 focus:outline-blue-600 rounded-sm'/>
    </div>
  )
}

export default SingleTextInput