import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
import './admin-nav.css'

export default function AdminNav() {
    const path = useLocation().pathname;
    const parts = path.split('/')
    const currentPage = parts[parts.length-1] 
    

  return (
    <div className='admin-nav'>
        <div className='admin-nav-left'>
            <div className="admin-nav-page-title">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </div>
        </div>
        <div className='admin-nav-center'>
            <form className='admin-nav-center-search'>
                <BsSearch size={'1.2rem'}/>
                <input type="text" placeholder='Search something'/>
            </form>
        </div>
        <div className='admin-nav-right'>
            <div className="admin-nav-profile">
                <div className="admin-nav-profile-image">
                    <img src={"/images/avatar.jpg"} alt="Profile image" />
                </div>
                <div className="admin-nav-profile-details">
                    <div className="admin-nav-profile-name">
                        John Doe
                    </div>
                    <div className="admin-nav-profile-role">
                        Admin
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
