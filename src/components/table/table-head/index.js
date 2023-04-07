import React from 'react'



const PopulationTableHead = ({ attributes }) => {
    return (
        <thead>
            <tr>
                {attributes.map((item, index) => (
                    <th key={`table-head-cell-${index}`}>
                        {item.label}
                    </th>
                ))}
            </tr>
        </thead>
    )
}


export default PopulationTableHead