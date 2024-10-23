import React from "react";
import {Carousel, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../img/background.jpg'
import backgroun2 from '../img/apt.jpg'
const CarouselSection: React.FC = () => 
{
    return (
        <Carousel>
            <Carousel.Item>
<img className="d-block w-100" src={background} alt="First Slide"/>
<Carousel.Caption>
    <h3> Parabellum Store </h3>
    <p> Todo lo que necesitas</p>
    <Button variant="primary">Buy</Button>
    
</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={backgroun2} alt="Second Slide"/>
                <Carousel.Caption>
          <h3>High Quality Products</h3>
          <Button variant="primary">Buy</Button>
        </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSection;