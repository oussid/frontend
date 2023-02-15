import React from 'react'
import Filter from '../order-by/OrderBy';
import './admin-table.css'

export default function AdminTable(props) {
    const data = props.data
    const headerColumns = data.length>0 ?  Object.keys(data[0]) : []

  return (
    <>
    <div className="admin-table-upper">
    <Filter orderItems={headerColumns}/>
    <button className="admin-table-create-btn">
      Ajouter
    </button>
    </div>

    <div className="admin-table">
      <table >
        <thead>
        <tr>
            {headerColumns.map(column => {
                return <td key={column} >
                        {column.toUpperCase() }
                    </td>
            })}

            <td>
                ACTIONS
            </td>
        </tr>
        </thead>

        <tbody>
        {
            data.map(row => {
            return <tr >
                {headerColumns.map(column => {
                    return <td >
                            {row[column]}
                            </td>  
                })}
                
                <td className='admin-actions-column'>
                  <button className='edit-btn'>Edit</button>
                  <button className='delete-btn'>Delete</button>
                  <button className='details-btn'>Details</button>
                </td>
            </tr>

            })
        }

        </tbody>
    </table>
    </div>
    </>
    
  )
}
