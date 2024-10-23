import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListadoProductos from "../src/components/listado_productos"
import DetallesProductos from "../src/components/detalles_productos";
import NavBar from "./components/NavBar";
import CarouselSection from "./components/Carousel";
const App : React.FC = () =>
{
    return (
        <Router>
            <div>
                <NavBar/>
            </div>
            <div>
                <CarouselSection/>
                
            </div>
          <Routes>
          <Route path="/" element={<ListadoProductos/>}/>
<Route path="/productos/:productoId" element={<DetallesProductos/>}/>


            </Routes>  
</Router>
    );
}

export default App;