import './Carrusel.css';
import Carousel from 'react-bootstrap/Carousel';
// Importar imagenes
import italianone from '../../images/italianone.jpg';
import italiantwo from '../../images/italiantwo.jpg';


// Se realiza la interpolación de las imagenes usando el {}

export const Carrusel = () =>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={italianone}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={italiantwo}
                alt="Second slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}