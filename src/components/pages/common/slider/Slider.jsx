import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './slider.scss'

const Slider = ({slideImages}) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const ImgRef = useRef('')
    const imgHeight = ImgRef.current.clientHeight;

    const prevSlide =()=> {
        setCurrentSlide(currentSlide === 0 ? slideImages.length - 1 : (prev) => prev - 1);
    }

    const nextSlide =()=> {
        setCurrentSlide(currentSlide === slideImages.length - 1 ? 0 : (prev) => prev + 1);
    }

  return (
    <>
        <div className="slider">
            <div className="slider-content" style={{transform: `translateY(-${currentSlide * imgHeight}px)`}}>
                {slideImages.map((slideImage, index) => (
                    <img src={slideImage} key={index} alt={`pic_${index}`} ref={ImgRef}/>
                ))}
            </div>
            <div className="slider-controls">
                <div className="prev-button">
                    <span className="mdi mdi-chevron-up-circle head-md" onClick={prevSlide}></span>
                </div>
                <div className="next-button">
                    <span className="mdi mdi-chevron-down-circle head-md" onClick={nextSlide}></span>
                </div>
            </div>
            <div className="slider-indicator">
                {slideImages.map((item, index) => (
                <span className={ index === currentSlide ? 'dot active' : 'dot'} key={item}></span>
                ))}
            </div>
        </div>
        <div className="slider-minor">
            <div className="slider-minor-content">
                {slideImages.map((slideImage, index) => (
                        <img src={slideImage} key={index} alt={`pic_${index}`}/>
                    ))}
            </div>
        </div>
    </>
  );
}

export default Slider;
