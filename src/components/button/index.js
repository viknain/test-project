import React from 'react'
import './button.css'

const Button = ({label, handleClick}) => {
    return (
<button onClick={()=> handleClick()} className="button">{label}</button>
    )
}


export default Button