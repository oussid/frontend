import React from 'react'
import { Link, useParams } from 'react-router-dom'
import AppSpreader from '../../components/appSpreader/AppSpreader'
import Banner from '../../components/banner/Banner'
import CallToAction from '../../components/callToAction/CallToAction'
import Slider from '../../components/Slider/Slider'
import './projet.css'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {CgOrganisation} from 'react-icons/cg'
import {GiEntryDoor} from 'react-icons/gi'
export default function Projet() {
    const id=useParams().id
    const apps = [        
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
    ]
  return (
    <>
    <div className='banner-frame'>
      <div className='banner-items'>
          <Link className='banner-item-tab'><FaMapMarkedAlt size={'2rem'}/>Localisation</Link>
          <Link className='banner-item-tab'><CgOrganisation size={'2rem'}/>Plan de masse</Link>
          <Link className='banner-item-tab'><GiEntryDoor size={'2rem'}/>Plan d'accès</Link>
      </div>
      <div className='banner-section'>
        <Banner img={'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg'} title={'Dyar Nazha'} subtitle={'DÉCOUVREZ À AGADIR'}/>
      </div>
    </div>
    <div className='banner-footer'>Appartements économiques <h3 className='banner-project-title'>Dyar Nazha</h3></div>

    <div style={{margin:'3rem 0rem'}}>
    <AppSpreader apps={apps}/>
    </div>
    <CallToAction/>
    <Slider/>
    </>
  )
}
