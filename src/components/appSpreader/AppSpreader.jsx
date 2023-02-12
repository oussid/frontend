import React from 'react'
import './appspreader.css'
import {AiFillEye} from 'react-icons/ai'
export default function AppSpreader(props) {

    /* props have appartements property array coming from home component, called apps */
    
  return (
    <div className='appSpreader-container'>
    <div className='appSpreader'>
        {props.apps.map((elm)=>
        <div className='app-card'>
            <div className='app-img'>
                <img src={elm.img}/>
            </div>
            <div className='app-city'>{elm.ville}</div>
            <div className='app-price'>{elm.prix}dh</div>
            <button className='app-btn' href='#'>S'avoir plus <AiFillEye size={'2rem'} /></button>
        </div>)}
    </div>
    </div>
  )
}
