import { useState, useEffect } from 'react';
import './App.css';
import SlikaJedan from './components/SlikaJedan1';
import SlikaDva from './components/SlikaDva';
import TextBox1 from './components/TextBox1';
import Slike from './components/slike/Slike';
import './App.css';

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    function handleScroll(event) {
      // Provera da li korisnik scrolluje
      if (event.deltaY !== 0) {
        setIsScrolling(true);

        // Restovanje statusa scrolla kad se animacija zavrsi
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    }

    // ADodajemo event listener
    window.addEventListener('wheel', handleScroll);

    // Uklanjamo event listener
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  function handleNavClick(section) {
    setActiveSection(section);
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={isScrolling ? 'scrolling' : ''}>
      <nav className="navbar">
        <ul>
          <li className={activeSection === 'pocetna' ? 'active' : ''} onClick={() => handleNavClick('pocetna')}>Početna</li>
          <li className={activeSection === 'galerija' ? 'active' : ''} onClick={() => handleNavClick('galerija')}>Galerija</li>
          <li className={activeSection === 'lokacija' ? 'active' : ''} onClick={() => handleNavClick('lokacija')}>Lokacija</li>
          <li className={activeSection === 'kontakt' ? 'active' : ''} onClick={() => handleNavClick('kontakt')}>Kontakt</li>
        </ul>
      </nav>
      <div id="pocetna">
        <SlikaJedan/>
      </div>
      <div id="galerija">
        <Slike/>
      </div>
      <div id="lokacija">
        <SlikaDva/>
      </div>
      <div id="kontakt">
      <TextBox1/>
      </div>
    </div>
  );
}

export default App;
