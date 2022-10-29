import './Header.css';
import {Link} from 'react-router-dom';

export const Header = () => {


    const Titulo = "Delicias Italianas";

    // Estas categurías se referencia en el dropdown, se usa un map el cual permitirá mapear cada una de ellas y se referenciará cada una usando el
    // item dentro del map 
    const categorias = ["Pizzas", "Lasañas", "Focaccias"]


    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> {Titulo}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link className='nav-link active' to='/'>Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' to='/nueva'>Nueva receta</Link>
                        </li>
                        
                    </ul>
                    <box-icon className = "iconColor" name='cart-add'></box-icon>
                    <box-icon className = "iconColor" name='log-out' ></box-icon>
                    </div>
                </div>
            </nav>
        </div>
    )
}