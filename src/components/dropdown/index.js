
import React from "react"
import './dropdown.css'

const Dropdwon = ({ options, handleSelect, placeholder, disabled }) => {
    return (
        <select disabled={disabled} placeholder={placeholder} onChange={(e) => handleSelect(e)} className="dropdown">
            <option value="">{placeholder}</option>
            {options.map((item, index) => (
                <option key={`dd-option-${index}`} value={item.value}>{item.label}</option>
            ))}
        </select>
    )
}


export default Dropdwon