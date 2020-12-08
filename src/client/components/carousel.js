import React from 'react'
import '../styles/carousel.css'

function Carousel (props) {

    let [slideIndex, setSlideIndex] = React.useState(1);
    let container = props.images[0].props.className === 'image-container-normal' ? 'slideshow-container' : 'slideshow-container-small'    
    let images;
    showSlides(slideIndex);

    function plusSlides(n) {
        setSlideIndex(slideIndex +=n)
        showSlides(slideIndex);
    }    

    function showSlides(n) {
        var slides = props.images;
        if (n > slides.length) {
            setSlideIndex(1)
        }    
        if (n < 1) {
            setSlideIndex(slides.length)
        }
        images = React.Children.map(props.images, (item, index) => {
            let style = item.props.style
            let visibility = 'none'
            if (n - 1 === index) {
                visibility = 'block'
            }
            return React.cloneElement(item, {
                style: {
                    ...style,
                    display: visibility
                }
            })
        }) 
    }

    return (
        <div className={container}>
            {images}        
      
            <a className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className='next' onClick={() => plusSlides(1)}>&#10095;</a>
            
        </div>
    )
}

export default Carousel;