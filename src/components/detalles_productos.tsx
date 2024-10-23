import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import api from '../services/controllador';
import {Productos} from "../interface/productointerface";

const DetallesProductos: React.FC = () =>
{
const {productoId} = useParams <{productoId : string}> ();
const [productos, setproducto] = useState<Productos[]>([]);

useEffect(() =>{
    api.get(`/productos/${productoId}`)
.then(response =>{
    setproducto(response.data);

})
.catch(error => {
    console.error("Error trayendo el detalle del producto", error);

});

}, [productoId]);

return(
    <div>
    <div>

  
    <h1> Productos </h1>
  </div>
  <div style={{ display:'flex', flexWrap:'wrap' }}>
{productos.map(productos => (
  <div key={productos.idproductos} style={{margin:'20px', border: '1px solid #fff', padding:'10px'}}>
  <img src={productos.image_url} alt={productos.nombre} style={{ width: '200px', height: '200px'}}/>
  <h2>{productos.nombre}</h2>
  <p> {productos.descripcion}</p>
  <p> Price: ${productos.precio}</p>
  </div>

))}
</div>
  </div>
);
};

export default DetallesProductos;