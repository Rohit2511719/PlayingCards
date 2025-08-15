import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img style={{height:"500px",width:"100%"}} src="https://media.slidesgo.com/storage/30246695/responsive-images/0-simple-printable-deck-of-playing-cards___media_library_original_459_324.jpg" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px",width:"100%"}} src="https://media.slidesgo.com/storage/30246695/responsive-images/0-simple-printable-deck-of-playing-cards___media_library_original_459_324.jpg" alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px",width:"100%"}} src="https://media.slidesgo.com/storage/30246695/responsive-images/0-simple-printable-deck-of-playing-cards___media_library_original_459_324.jpg" alt="" />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider
