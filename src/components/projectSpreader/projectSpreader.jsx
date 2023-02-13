import React from 'react'
import './projectSpreader.css'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function ProjectSpreader(props) {
    
  return (
    <div className='projectSpreader-container'>
    <div className='projectSpreader'>
        {props.projects.map((elm)=>
        <div className='project-card'>
            <div className='project-img'>
                <img src={elm.img}/>
            </div>
            <div className='project-city'>{elm.ville}</div>
            <div className='project-name'>{elm.name}</div>
            <Link className='project-btn' to={'/nos_projets/'+elm.id}>Consulter projet <AiFillEye size={'2rem'} /></Link>
        </div>)}
    </div>
    </div>
  )
}
