import React from 'react'
import SingleTextInput from './SingleTextInput'

interface InputParams {
    title: string,
    placeholder: string
}

interface IDoubleTextInput {
    input1: InputParams,
    input2: InputParams
}


function DoubleTextInput({input1, input2}:IDoubleTextInput) {
  return (
    <div className='flex flex-row gap-4'>
        <SingleTextInput title={input1.title} placeholder={input1.placeholder}/>
        <SingleTextInput title={input2.title} placeholder={input2.placeholder}/>
    </div>
  )
}

export default DoubleTextInput