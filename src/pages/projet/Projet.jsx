import React from 'react'
import { useParams } from 'react-router-dom'
import AppSpreader from '../../components/appSpreader/AppSpreader'
import Banner from '../../components/banner/Banner'
import CallToAction from '../../components/callToAction/CallToAction'
import Slider from '../../components/Slider/Slider'

export default function Projet() {
    const id=useParams().id
    const apps = [        
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
        {id:1,ville:'Rabat', prix:25000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5eSA6Fh_jFWpMNvLMqcWPDQPNCbk4tL5QA&usqp=CAU'},
    ]
  return (
    <>
    <Banner img={'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg'} title={'Dyar Nazha'}/>
    <div style={{margin:'3rem 0rem'}}>
    <AppSpreader apps={apps}/>
    </div>
    <CallToAction/>
    <Slider/>
    </>
  )
}
