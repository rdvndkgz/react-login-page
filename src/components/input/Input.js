import React from 'react'
import "./input.css"
function Input({ type, placeHolder }) {
  return ( <input className="input" type={type} placeholder={placeHolder} /> 
  )
}

export default Input
