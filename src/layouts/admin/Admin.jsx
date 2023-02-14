import React from 'react'
import { Link, Navigate, Outlet, useParams } from 'react-router-dom'
import AdminNav from '../../components/admin-nav/AdminNav'
import Sidebar from '../../components/sidebar/Sidebar'
import './admin.css'

export default function Admin() {

  return (
    <div className='admin-container'>
        <Sidebar/>

        <div className='admin-right-view'>
            <AdminNav/>

            <div className="admin-main">
                <Outlet/>
                <div className="test">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
