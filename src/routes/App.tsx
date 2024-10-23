import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListadoProductos from "../components/listado_productos";
import DetallesProductos from "../components/detalles_productos";

const App : React.FC = () =>
{
    return (
        <Router>
          <Routes>
          <Route path="/" element={<ListadoProductos/>}/>
<Route path="/productos/:productoId" element={<DetallesProductos/>}/>

            </Routes>  
</Router>
    );
};

export default App;