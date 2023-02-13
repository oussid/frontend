import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import './sidebar.css'

export default function Admin() {
    const tabs = ['Acceuil', 'Projets', 'Appartements', 'Employées']
  return (

        <div className='admin-sidebar'>
            <div className='sidebar-logo'>
                <Link to={'/admin'} ><img src="/images/logo-white-nobg.png" alt="Logo" /></Link>
                
            </div>

            <div className="sidebar-tabs">
                {tabs.map(elm=>
                    <NavLink key={elm}  className={'sidebar-tab'} to={'/admin/'+elm}>{elm}</NavLink>)}
            </div>
            
        </div>

  )
}
