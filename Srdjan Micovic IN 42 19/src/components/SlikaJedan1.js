import React, { useState, useRef, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import prva from '../img/test.jpg';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import smoothscroll from 'smoothscroll-polyfill';
import ReservationForm from './ReservationForm';  //kasnije dodajemo

const SlikaJedan = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [formRef]);

  const handleReserveNowClick = () => {
    setShowForm(true);
  };

  return (
    <Parallax className='slika' bgImage={prva} strength={300}>
      <h2 class='animate__animated animate__fadeIn'>Joanna Apartmani</h2>
      <div class='arrow'>
        <a href='#scroll'>
          <strelica></strelica>
          <strelica></strelica>
        </a>
      </div>
      <div className='content'>
        {showForm && (
          <div className='form-overlay' ref={formRef}>
            <ReservationForm />
          </div>
        )}
        <div class='button animate__animated animate__fadeIn'>
          <a href='#' onClick={handleReserveNowClick}>
            Rezerviši Odmah
            <span class='shift'>›</span>
          </a>
          <div class='mask'></div>
        </div>
      </div>
    </Parallax>
  );
};

export default SlikaJedan;
