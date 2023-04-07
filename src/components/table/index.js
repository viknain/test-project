import React, { Fragment } from 'react'
import TableData from './table-body'
import PopulationTableHead from './table-head'
import './table.css'



const PopulationTable = ({ attributes, data, isLoading }) => {
    return (
        <Fragment>
            <table className="table">
                <PopulationTableHead attributes={attributes} />
                {data?.length ? <TableData attributes={attributes} data={data} /> : null}

            </table>
            {isLoading ? <div className="info-msg">Loading...</div> : !data?.length ? <div className="info-msg">No data found</div> : null}
        </Fragment>
    )
}

export default PopulationTable