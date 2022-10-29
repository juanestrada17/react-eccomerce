// Este js administra las rutas, en el AddProducto se especifica la ruta

import { Route, Routes } from "react-router-dom"
import { AddProducto } from "./components/AddProducto/AddProducto"
import { Inicio } from "./components/inicio/Inicio"

export const Root = () =>{

    return(
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/nueva" element={<AddProducto/>}></Route>
        </Routes>
    )
}