import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import './admin.css'

export default function Admin() {

    const title = useParams().title
  return (
    <div className='admin-container'>
        <Sidebar/>
        <div className='admin-right-view'>
            <div className='admin-nav'>
                <div className='admin-nav-title'>{title}</div>
            </div>
            <div className="admin-main">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
