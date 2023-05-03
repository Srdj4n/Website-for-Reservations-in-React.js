import React from 'react'
import './SlikeStyles.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { Parallax } from 'react-parallax';

import AJedan from '../../img/aj11.jpg'
import Bazen from '../../img/bazen1.jpg' //importovanje slike
import Terasa from '../../img/terasa1.jpg'
import Unutra from '../../img/unutra1.jpg'
import Spavaca from '../../img/spavaca.jpg'

function Slike () {
  return (
    <div className='slike'>
        <div className="container">
           <h5>Lokacija</h5>
        <AnimationOnScroll duration={0.5} animateIn='animate__slideInRight' >  <h4 id='scroll'>All-Inclusive Apartman</h4> </AnimationOnScroll>
        <AnimationOnScroll duration={0.5} animateIn='animate__slideInLeft' >  <p>Sa najlepšim pogledom na Zlatiboru</p></AnimationOnScroll>
        <div className="img-container">
             <img className='span-3 image-grid-row-2' src={AJedan}   alt="/"/>  
             <img src={Bazen} alt="/"/>
             <img src={Terasa} alt="/"/>
             <img src={Unutra} alt="/"/>
             <img src={Spavaca} alt="/"/>
      </div>
      </div>
    </div>
  )
}
export default Slike    // exportovanje "Slike komponente"
