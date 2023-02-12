import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './sidebar.css'

export default function Admin() {
    const tabs = ['Acceuil', 'Projets', 'Employées']
  return (

        <div className='admin-sidebar'>
            {tabs.map(elm=><div className='sidebar-tab'>
                <Link to={'/admin/'+elm}>{elm}</Link>
            </div>)}
        </div>

  )
}
