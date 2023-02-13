import React from 'react'
import './banner.css'
export default function Banner(props) {
  return (
    <div className='banner-container' style={{backgroundImage:'url('+props.img+')'}}>
        <div className='banner-text'><h1>{props.title}</h1></div>
    </div>
  )
}
