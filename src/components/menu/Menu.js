import React from 'react'
import './menu.css'
import {BsInstagram, BsTwitter, BsFacebook} from 'react-icons/bs'
export default function Menu() {
  return (
    <nav>
      <div className='nav-left'>
      <img className='nav-logo' src={'/images/logo-gold-nobg.png'} alt="logo" />
      </div> 
      <div className='nav-center'>
        <div className='nav-tab'>A propos de nous</div>
        <div className='nav-tab'>Nos projets</div>
        <div className='nav-tab'>Rendez-vous</div>
        <div className='nav-tab'>Contact</div>
      </div> 
      <div className='nav-right'>
        <div><BsInstagram size={"1.5rem"} color={"#6D813B"} /></div>
        <div><BsTwitter size={"1.5rem"}color={"#6D813B"}/></div>
        <div><BsFacebook size={"1.5rem"}color={"#6D813B"}/></div>
      </div> 
    </nav>
  )
}
