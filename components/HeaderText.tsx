import React from 'react'

interface IHeaderText {
    text: string
}

function HeaderText({text}: IHeaderText) {
  return (
    <h1 className='text-lg font-bold text-slate-950'>{text}</h1>
  )
}

export default HeaderText