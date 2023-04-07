import React from 'react'
import { getPropByString } from '../../../utils/helper'



const TableRow = ({ attributes, rowData }) => {

    const bindTableCell = (cellInfo, data) => {
        const component = cellInfo?.component
        if (component) {
            if (component.name === "Image") {
                return <div className="table-cell-img"><img src={getPropByString(data, component.attribute)} /></div>
            }
            // TODO: Need to handle other component types
           return ""
        } else {
            return data[cellInfo.name]
        }
    }
    return (
        <tr>
            {attributes.map((item, index) => (
                <td key={`table-row-cell-${index}`}>
                    {bindTableCell(item, rowData)}
                </td>
            ))}
        </tr>
    )
}


export default TableRow