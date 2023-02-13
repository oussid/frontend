import React from 'react'
import './menu.css'
import {BsInstagram, BsTwitter, BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function Menu() {
function toggleMenuClass(){
  const hamburger=document.querySelector('.hamburger')
  const hamburgerNav=document.querySelector('.hamburger-nav')
  hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    hamburgerNav.classList.toggle('active')
  })
}
  return (
    <>
    <nav>
      <div className='nav-left'>
      <Link to='/'><img className='nav-logo' src={'/images/logo-gold-nobg.png'} alt="logo" /></Link>
      </div> 
      <div className='nav-center'>
        <Link className='nav-tab' to={'a_propos_de_nous'}>A propos de nous</Link>
        <Link className='nav-tab' to={'nos_projets'}>Nos projets</Link>
        <Link className='nav-tab' to={'rendez_vous'}>Rendez-vous</Link>
        <Link className='nav-tab' to={'contact'}>Contact</Link>
      </div> 
      <div className='nav-right'>
        <div className='nav-icon'><BsInstagram size={"1.5rem"}/></div>
        <div className='nav-icon'><BsTwitter size={"1.5rem"}/></div>
        <div className='nav-icon'><BsFacebook size={"1.5rem"}/></div>
      </div>

      <div onClick={toggleMenuClass} className='hamburger'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
      </div>

    </nav>
    <div className='hamburger-nav'>
        <div className='hamburger-nav-center'>
          <div className='hamburger-nav-tab '>A propos de nous</div>
          <div className='hamburger-nav-tab '>Nos projets</div>
          <div className='hamburger-nav-tab '>Rendez-vous</div>
          <div className='hamburger-nav-tab '>Contact</div>
        </div>
        <div className='hamburger-nav-icons'>
          <div className='hamburger-nav-icon '><BsInstagram size={"1.5rem"}/></div>
          <div className='hamburger-nav-icon '><BsTwitter size={"1.5rem"}/></div>
          <div className='hamburger-nav-icon '><BsFacebook size={"1.5rem"}/></div>
        </div>
      </div>
  </> )
}
