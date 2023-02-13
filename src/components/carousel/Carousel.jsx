import React from 'react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import './carousel.css'

export default function Carousel(props) {

  return (
    <div className='crousel'>
        <div className="slider">
            <div className="slide">
                <img src="https://source.unsplash.com/random?landscape,mountain"alt=""/>
            </div>

            <div className="slide">
                <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
            </div>
            <div className="slide">
                <img src="https://source.unsplash.com/random?landscape,night" alt="" />
            </div>

            <div className="slide">
                <img src="https://source.unsplash.com/random?landscape,city" alt="" />
            </div>
        <button className="btn btn-next"><BsFillArrowRightSquareFill size={'2rem'} /></button>
        <button className="btn btn-prev"><BsFillArrowLeftSquareFill size={'2rem'}/></button>
        </div>

    </div>
    
  )
}
