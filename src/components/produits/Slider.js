import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import imageSliders from './ImageSliders';
import Arrows from './Arrows';
import Dots from './Dots';
import './asset/slider.css';

const len = imageSliders.length -1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval =setInterval(() => {
            setActiveIndex( activeIndex === len ? 0 : activeIndex +1);
        }, 4000);
        return () => clearInterval(interval);
    }, [activeIndex]);
    return (
            <div className= 'slider-container'>
                <SliderContent
                    activeIndex={activeIndex}
                    imageSliders={imageSliders}
                />
                <Arrows
                    prevSlide={() => setActiveIndex (activeIndex <1 ? len : activeIndex -1)}
                    nextSlide={() => setActiveIndex (activeIndex === len ? 0 : activeIndex +1)}
                />
                <Dots 
                    activeIndex={activeIndex}
                    imageSliders={imageSliders}
                    onClick={setActiveIndex => setActiveIndex(activeIndex)}
                />
            </div>
    );
}

export default Slider;