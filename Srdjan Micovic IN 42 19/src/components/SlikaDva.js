import { Parallax } from 'react-parallax';
import druga from '../img/test.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const SlikaDva = () => (
    <Parallax  className='slika' bgImage={druga}  strength={400}>
    <AnimationOnScroll offset={50} duration={0.5} animateIn='animate__zoomIn'animateOut='animate__zoomOut' ><h1>Lokacija</h1></AnimationOnScroll>
        <div className='content'>
            <iframe max width="735" max height="484" id="gmap_canvas" src="https://maps.google.com/maps?q=joanna&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>

    </Parallax>
);

export default SlikaDva
