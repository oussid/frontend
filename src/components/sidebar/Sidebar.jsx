import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import {HiOutlineHome} from 'react-icons/hi'
import {FiMap} from 'react-icons/fi'
import {BsPeople} from 'react-icons/bs'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import './sidebar.css'

export default function Admin() {
    // const tabs = ['Acceuil', 'Projets', 'Appartements', 'Employées']
    const tabs = [
        {
            id: '0',
            title: 'Acceuil',
            link: '/accueil',
            icon: <HiOutlineHome/>
        },
        {
            id: '1',
            title: 'Projets',
            link: '/projets',
            icon: <FiMap/>
        },
        {
            id: '2',
            title: 'Appartements',
            link: '/appartements',
            icon: <HiOutlineOfficeBuilding/>
        },
        {
            id: '3',
            title: 'Employées',
            link: '/employees',
            icon: <BsPeople/>
        },
    ]
  return (

        <div className='admin-sidebar'>
            <div className='sidebar-logo'>
                <Link to={'/admin'} ><img src="/images/logo-white-nobg.png" alt="Logo" /></Link>
                
            </div>

            <div className="sidebar-tabs">
                {tabs.map(elm=>
                    <NavLink key={elm.id}  className={'sidebar-tab'} to={'/admin'+elm.link}>
                        <div>{elm.icon}</div>
                        
                        <div>{elm.title}</div>
                    </NavLink>)}
            </div>
            
        </div>

  )
}
