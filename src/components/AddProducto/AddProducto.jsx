import './AddProducto.css';

// Importar el useState
import { Form, Table, Button } from 'react-bootstrap';
import { useState, createRef } from 'react';


export const AddProducto = () =>{

    // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
    // Es un array debido a que aquí van a caer los JSON
    const valorInicial = [{nombre_plato: "Pastas",
        descripcion_plato: "Deliciosas pastas a la carbonara",
        valor_plato: 20000,
        stock_plato: 3}];
        
    const [platos, setPlato] = useState(valorInicial);
    // formData with REF, it is out of the function because it only works when you click 
    const formData = createRef();

   

    // Product handler method needs to be created
    // event.target.value
    const add = (event) =>{
        event.preventDefault();

    
        // Example with ref
        
        const nuevoPlato = {
            nombre_plato: formData.current.nombre_plato.value,
            descripcion_plato: formData.current.descripcion_plato.value,
            valor_plato: Number(formData.current.valor_plato.value),
            stock_plato: Number(formData.current.stock_plato.value)
        }
        
        // add a new product - plato to the array. Añadir toda la información imbedded con el ...platos
        setPlato([...platos, nuevoPlato]);
        console.log(platos);
    }

    // Increment stock by 1
    const increStock = (event) => {
        // el index del plato - producto
        const indexOfArray = event.target.value;
        // Actualizar el stock del plato usando su array y sumandolo + 1
        platos[indexOfArray].stock_plato = platos[indexOfArray].stock_plato + 1;
        setPlato([...platos])
        
    }

    // Decrement stock by 1
    const decreStock = (event) => {
        // el index del plato - producto
        const indexOfArray = event.target.value;
        // Actualizar el stock del plato usando su array y sumandolo + 1
        if(platos[indexOfArray].stock_plato > 0){
            platos[indexOfArray].stock_plato = platos[indexOfArray].stock_plato - 1;
            setPlato([...platos])
        }

    }


    // Adds something when you click submit

    // Give a ref to the form and import it
    return (

        <div >
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <Form onSubmit={add} ref={formData}>
                        <Form.Group className="mb-3" controlId="formNombrePlato">
                            <Form.Label>Nombre plato: </Form.Label>
                            <Form.Control type="text" placeholder="Nombre del plato" name="nombre_plato" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescripcionPlato">
                            <Form.Label>Descripción: </Form.Label>
                            <Form.Control type="text" placeholder="Descripción del plato" name="descripcion_plato" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formValorPlato">
                            <Form.Label>Valor: </Form.Label>
                            <Form.Control type="number" placeholder="Costo del plato" name= "valor_plato" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formStockPlato">
                            <Form.Label>Stock: </Form.Label>
                            <Form.Control type="number" placeholder="¿Cuántos desea agregar?" name= "stock_plato"/>
                        </Form.Group>
                        <div className='col text-center'>
                            <Button variant="danger"  type="Enviar">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>


            <div className='container'>
                <div className='row'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre del plato</th>
                                <th>Descripción del plato</th>
                                <th>Valor del plato</th>
                                <th>Stock del plato</th>
                                <th>Añadir plato</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                platos.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{item.nombre_plato}</td>
                                            <td>{item.descripcion_plato}</td>
                                            <td>{item.valor_plato}</td>
                                            <td>{item.stock_plato}</td>
                                            <td>
                                                <Button variant= "success" onClick={event=>increStock(event)} value = {index}>+</Button>
                                                <Button variant= "danger" onClick={event=>decreStock(event)} value = {index}>-</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>

   


    )
}


//const formData = event.target;

        // normal formData 
        /* const nuevoPlato = {
            nombre_plato: formData.nombre_plato.value,
            descripcion_plato: formData.descripcion_plato.value,
            valor_plato: formData.valor_plato.value,
            stock_plato: formData.stock_plato.value
        }; */
