import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Banner from '../../components/banner/Banner'
import './apropos.css'
import Slider from '../../components/Slider/Slider'
import CallToAction from '../../components/callToAction/CallToAction'

export default function APropos() {
  const [content, setContent] = useState('presentation')
  const [stylee, setStyle] = useState({
    tab1:{color:'var(--secondary)',border:'3px solid var(--primary)'}
    ,tab2:{color:'black',border:'none'}
  })
  function tabsToggle(tab,index){
    setContent(tab)
    if(index==0){
      setStyle({
        tab1:{color:'var(--secondary)', border:'3px solid var(--primary)'}
        ,tab2:{color:'black', border:'none'}
      })
    }
    else{
      setStyle({
        tab1:{color:'black', border:'none'},
        tab2:{color:'var(--secondary)', border:'3px solid var(--primary)'}
      })
    }
  }
  /*Just text, better this way ig*/
  const presentation = "iliale du pôle immobilier de Palmeraie Développement, Les Espaces Saada réalise des projets de moyen standing et économiques en accord avec les valeurs de qualité et d’innovation du groupe. Plus que de simples projets immobiliers, les projets entrepris par Les Espaces Saada sont des concepts urbanistiques innovants offrant un cadre de vie unique. Chaque projet des Espaces Saada a l’ambition d’être une ville dans la ville. Nous comptons aujourd’hui sur le dynamisme et l’engagement de plus de 150 collaborateurs dans les plus grandes villes du royaume partageant une réelle volonté de hisser la qualité de nos produits et nos prestations au sommet des standards du secteur à l’échelle locale et internationale."
  const cledor = `Palmeraie Développement a, très tôt, cru en la priorité d'investir dans la promotion immobilière sociale et moyen standing. En effet, suite à quelques expériences réussies dans ce domaine, le groupe a décidé au début des années 2000 de consacrer une filiale dédiée: « Les Résidences Dar Saada. »

  
  
  En 2007, Palmeraie Développement prend le cap de la performance en couvrant les interventions de Dar Saada du label évocateur : Espaces Saada.
  
  
  Une offre moyen standing : de qualité et de bien-être, Les Espaces Saada a à son actif une production de qualité, auréolé du concept ''ville dans la ville''. En ce sens, les projets qui portent la signature de ce Label constituent un cadre de vie global : espaces verts, écoles, commerces de proximité, sites agréables où il fait bon vivre notamment dans les projets suivants :`


  return (
    <>
    <Banner img={'https://cdn.pixabay.com/photo/2018/05/01/02/13/door-3364579_960_720.jpg'} title={'Présentation'} />
    <div className="apropos-content-container">
        <div className="apropos-nav">
          <div className={'apropos-nav-tab'} style={{color:stylee.tab1.color,borderBottom:stylee.tab1.border}} onClick={()=>tabsToggle('presentation',0)}>Présentation</div>
          <div className={'apropos-nav-tab'} style={{color:stylee.tab2.color,borderBottom:stylee.tab2.border}} onClick={()=>tabsToggle('cledor',1)}>Cledor</div>
        </div>
        <div className="apropos-content">
            {content=='presentation'?presentation:cledor}
        </div>
    </div>
    <CallToAction/>
    <Slider/>
    </>
  )
}
