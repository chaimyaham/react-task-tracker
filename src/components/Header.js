import React, { useState } from 'react'
import Button from './Button'

export default function Header({title,onAdd,showAddForm}) {
  // const [text,setText]=useState('Add')
  // const[color,setColor]=useState('rgb(21, 115, 71)')


    const add=()=>{
        console.log('clicked');
    }
  return (
    <div className='header'>
        <h1 className='text-capitalize text-left text-dark'>{title}  </h1>
        <Button text={!showAddForm?'Add':'close'} color={!showAddForm?'rgb(21, 115, 71)':'black'} onClick={onAdd}/>

    </div>
  )
}
Header.defaultProps={
    title:'task tracker'
}