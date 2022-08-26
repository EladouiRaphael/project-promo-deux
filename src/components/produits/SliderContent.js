import React from "react";

function SliderContent ({ activeIndex, imageSliders}) {
    return (
        <section>
            {imageSliders.map((slide, index) => (
                <div key={index}
                className={ index === activeIndex ? 'slide active' : 'inactive'}>
                <img className="slide-image" src={slide.urls} alt='#' />
                <h2 className='slide-title'>{slide.title}</h2>
                <h4 className='slide-text'>{slide.description}</h4>
                </div>
            ))}
        </section>
    )
}

export default SliderContent