import React from 'react'
import Banner from '../../components/banner/Banner'
import CallToAction from '../../components/callToAction/CallToAction'
import ProjectSpreader from '../../components/projectSpreader/projectSpreader'
import Slider from '../../components/Slider/Slider'
import './noProjets.css'
import {BsFilterSquareFill} from 'react-icons/bs'

export default function NoProjets() {
  const projects = [
    {id:1,ville:'Rabat' , name:'Dyar Nzaha', img:"https://cdn.pixabay.com/photo/2017/06/12/15/08/canal-2395818_960_720.jpg" },
    {id:2,ville:'Rabat' , name:'Adnane Adrar', img:"https://cdn.pixabay.com/photo/2017/06/12/15/08/canal-2395818_960_720.jpg" },
    {id:3,ville:'Rabat' , name:'Fadaat Rahma', img:"https://cdn.pixabay.com/photo/2017/06/12/15/08/canal-2395818_960_720.jpg" },
    {id:4,ville:'Rabat' , name:'Adnane Adrar', img:"https://cdn.pixabay.com/photo/2017/06/12/15/08/canal-2395818_960_720.jpg" },
    {id:5,ville:'Rabat' , name:'Dyar Nzaha', img:"https://cdn.pixabay.com/photo/2017/06/12/15/08/canal-2395818_960_720.jpg" },
    {id:6,ville:'Rabat' , name:'Fadaat Rahma', img:"https://cdn.pixabay.com/photo/2017/06/12/15/08/canal-2395818_960_720.jpg" },
  ]
  return (<>
    <Banner img={'https://cdn.pixabay.com/photo/2020/10/05/18/43/building-5630441_960_720.jpg'} title={'Nos Projets'}/>
    <div className='filter-container'>
      <div className="filter-text"><h3>Filtrer par :</h3></div>
      <div className="filter-select-container">
        <BsFilterSquareFill color='var(--primary)' size={'1.5rem'}/>
        <select className='filter-select'>
            <option>Rabat</option>
            <option>Salé</option>           
            <option>Rabat</option>
            <option>Salé</option>
        </select>
      </div>
    </div>
    <ProjectSpreader projects={projects}/>
    <CallToAction/>
    <Slider/>
    </>
  )
}
