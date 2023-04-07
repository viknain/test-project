import React from 'react'
import TableRow from './tableRow'
import './tableRow.css'

const TableData = ({ attributes, data }) => {
    return (
        <tbody>
            {data?.length ? data.map((item, index) => (
                <TableRow key={`table-row-${index}`} attributes={attributes} rowData={item} />
            )): null}
        </tbody>

    )
}


export default TableData