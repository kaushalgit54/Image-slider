import classes from './ImageSlider.module.css';
import React, {useState, useRef, useEffect, useCallback} from 'react';

const slidesContainerStyles = {
    display: 'flex',
    height: '100%',
    transition: 'transform ease-out 0.3s',
}
const slidesContainerOverflowStyles = {
    overflow: 'hidden',
}
const ImageSlider = ({slides, parentWidth})=>{

    const timerRef = useRef(null);

    const [currIndex, setcurrIndex] = useState(0);
   
    const sliderStyles ={
        height: '100%',
        position: 'relative',
    };
const slideStyles ={
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currIndex].url})`,
};
const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '10px',
    fontSize: '65px',
    color: 'black',
    opacity: 0.8,
    zIndex:1,
    cursor:'pointer',
}
const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '10px',
    fontSize: '65px',
    color: 'black',
    opacity: 0.8,
    zIndex:1,
    cursor:'pointer',
}
const gotoNext = useCallback(()=>{
    const islastSlide = currIndex === slides.length-1;
    const newIndex = islastSlide ? 0 : currIndex+1; 
    setcurrIndex(newIndex);
},[currIndex, slides]);
const gotoPrevious = ()=>{
    const isFirstSlide = currIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currIndex - 1;
    setcurrIndex(newIndex);
    
}
const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '5%',
    transform: 'translate(0, -10%)',
    left: '10%',
    color: 'white',
    opacity: '0.6'
}
const dotStyles = {
    margin: '0 8px',
    cursor: 'pointer',
    fontSize: '20px',
}
const getSlideStylesWithBackground = (slideIndex)=>({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
})
const getSlidesContainerStylesWithWidth = ()=>({
 ...slidesContainerStyles,
 width: parentWidth*slides.length,
 transform: `translateX(${-(currIndex*parentWidth)}px)`
})
const gotoSlide = (index)=>{
    setcurrIndex(index);
}
    useEffect(()=>{
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
         timerRef.current = setTimeout(()=>{
        gotoNext();
    },2000);
    return ()=> clearTimeout(timerRef.current);
     },[gotoNext]);
    return(
        <div style={sliderStyles}>
            <div>
                <div style={leftArrowStyles} onClick={gotoPrevious}>⮜</div>
                <div style={slideStyles}></div>
                <div style={rightArrowStyles} onClick={gotoNext}>⮞</div>
            </div>
            <div style={slidesContainerOverflowStyles}></div>
            <div style={getSlidesContainerStylesWithWidth()}>
              {slides.map((_, slideIndex) => (
                <div key={slideIndex} style={getSlideStylesWithBackground(slideIndex)}></div>
              ))}  
            </div>
          <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex)=>(
                <div style={dotStyles} key={slideIndex} onClick={()=> gotoSlide(slideIndex)}>●</div>
            ))}
          </div>
        </div>
    );
};
export default ImageSlider;