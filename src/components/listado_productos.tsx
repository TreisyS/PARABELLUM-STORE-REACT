import React, {useEffect, useState} from 'react'
import api from '../services/controllador'
import {Productos} from '../interface/productointerface'


export const ListadoProductos: React.FC  = () => {

  const[productos, setProductos] = useState<Productos[]>([]);

  useEffect(() => {
api.get('/productos')
.then(response =>{
  setProductos(response.data);
})
.catch(
  error => {
    console.error("Error trayendo los productos", error);

  });


  }, []);
    
  return (
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


export default ListadoProductos;
