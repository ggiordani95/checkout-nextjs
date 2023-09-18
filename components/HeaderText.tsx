import React from 'react'

type THeaderText = {
    text: string
}

function HeaderText({text}: THeaderText) {
  return (
    <h1 className='text-2xl font-bold text-slate-950'>{text}</h1>
  )
}

export default HeaderText