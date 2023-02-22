import React from 'react'
import Filter from '../order-by/OrderBy';
import { BsArrowRight } from 'react-icons/bs'
import './admin-table.css'
import { Link } from 'react-router-dom';

export default function AdminTable(props) {
  // props.data: array of objects containing informations about the data that'll be represented on the table
  
  // props.info:object of information about the table in this form: {
    // tableType: overview/detailed
    // upperTitle: null/"a title if exists",
    // button: {
        // text: "btn text",
        // type: link/btn,
        // href: "a link"
        // 
    // }
  // }

    const info = props.info
    const data = info.tableType == 'overview' ? props.data.slice(0,5) : props.data
    const headerColumns = data.length>0 ?  Object.keys(data[0]) : []
    // a list of words that could be used as an id. e.g cin is also an id
    const ids = ['id', 'cin', 'id_app', 'id_pro', 'id_emp', 'id_r']

  return (
    <>
    <div className="admin-table-upper">
    {
      info.tableType=='detailed'? <Filter orderItems={headerColumns}/>: <h3>{info.upperTitle}</h3>
    }
    <Link to={info.button.href}>
      <button className={`admin-table-upper-${info.button.type}`}>
       {info.button.text  } 
       {info.tableType=='overview' && <BsArrowRight />}
    </button>
    </Link>
    
    </div>

    <div className="admin-table">
      <table >
        <thead>
        <tr>
            {headerColumns.map(column => {
              // overview tables should not show id column
                return (info.tableType=='detailed' || (!ids.includes(column) && info.tableType=='overview')) && <td key={column} >
                        {column.toUpperCase() }
                        </td>
            })}

            {/* overview tables should not show actions column */}
            {(info.tableType=='detailed') && <td>
                ACTIONS
            </td>}
        </tr>
        </thead>

        <tbody>
        {
            data.map(row => {
            return <tr key={row.id}>
              {/* no ids for overview tables */}
                {headerColumns.map(column => {
                    return (info.tableType=='detailed' || (!ids.includes(column) && info.tableType=='overview')) && <td key={row[column]} >
                          {/* check if the column contains an image */}
                          {(info.hasImgColumn && column=='image')? <img className='profile-img-small' src={row[column]} /> : row[column]}
                            {/* {row[column]} */}
                            </td>  
                })}
                
                {/* no actions for overview tables */}
                {info.tableType=='detailed' && <td className='admin-actions-column'>
                  <button className='edit-btn'>Edit</button>
                  <button className='delete-btn'>Delete</button>
                  <button className='details-btn'>Details</button>
                </td>}
            </tr>

            })
        }

        </tbody>
    </table>
    </div>
    </>
    
  )
}
