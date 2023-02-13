import React from 'react'
import {BsInstagram, BsTwitter, BsFacebook, BsYoutube} from 'react-icons/bs'
import './footer.css'

export default function Footer(props) {
  return (
    <>
    <div className='footer-container'>
        <div className='footer-logo-div'>
            <div className='footer-logo'>
                <img src='/images/logo-gold-nobg.png'/>
            </div>
            <div className='footer-icons-container'>
            <BsYoutube  size={'2rem'}className='footer-icons'/>
            <BsFacebook  size={'2rem'}className='footer-icons'/>
            <BsInstagram size={'2rem'} className='footer-icons'/>
            <BsTwitter  size={'2rem'}className='footer-icons'/>
            </div>
        </div>

        <div className='footer-links'>
        <div className='footer-title'><h3>Liens</h3></div>
            <a>A propos de nous</a>
            <a>Nos projets</a>
            <a>Rendez-vous</a>
            <a>Contactez-nous</a>
            <a>Avis</a>
        </div>
        
        <div className='footer-cities'>
        <div className='footer-title'><h3>Villes</h3></div>
            <a>Rabat</a>
            <a>Casablanca</a>
            <a>Agadir</a>
            <a>Fes</a>
            <a>Los santos</a>
        </div>
    </div>
    
        <div className='footer-footer'>
        <p>
        © 2023 Cledor - Tous droits réservés
        </p>
        </div>
    </>
  )
}
