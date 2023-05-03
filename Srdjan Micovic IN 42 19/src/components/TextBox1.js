import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const TextBox= () => {
  return(
    <div className='text-box'>
    <AnimationOnScroll duration={0.5} animateIn='animate__slideInRight' animateOut='animate__slideOutRight'>
  <h3> Kontakt </h3>
  </AnimationOnScroll>
  <AnimationOnScroll duration={0.5} animateIn='animate__slideInLeft' animateOut='animate__slideOutLeft'>
  <p>Telefon: 066 123 123</p>
  <p>Ime:Petar Petrovic</p>
  <p>Adresa: Petra Petrovica 13 Zlatibor</p>
  </AnimationOnScroll>
    </div>
  )
}
export default TextBox
