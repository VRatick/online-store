import React from 'react'
import '../styles/carousel.css'

function Carosel (props) {

    let [slideIndex, setSlideIndex] = React.useState(1);
    let container = props.images[0].props.style.height === '600px' ? 'slideshow-container' : 'slideshow-container-min'
    let childrenImage;
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
        childrenImage = React.Children.map(props.images, (item, index) => {
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
            {childrenImage}        
      
            <a className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className='next' onClick={() => plusSlides(1)}>&#10095;</a>
            
        </div>
    )
}

export default Carosel;