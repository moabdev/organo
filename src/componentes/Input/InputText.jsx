import { useState } from 'react'
import './InputText.css'

const Input = ({ handleState, label, placeholder, isRequired }) => {
  
  const handleInput = evento => {
    handleState(evento.target.value)
  }

  return (
    <div className="inputText">
        <label htmlFor="name">{label}</label>
        <input 
          type="text" 
          id="name" 
          placeholder={placeholder} 
          required={isRequired} 
          onChange={handleInput} 
        />
    </div>
  )
}

export default Input