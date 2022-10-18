import React from 'react'

export default function Button({text,color,onClick}) {
  return (
    <div>
        <button
         style={{backgroundColor:color}} 
         className="btn ml-5 px-4 btn-success "
         onClick={onClick}
         >{text}</button>
    </div>

  )
}
