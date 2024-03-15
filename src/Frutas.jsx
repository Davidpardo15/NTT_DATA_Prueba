
import React, { useState, useEffect } from 'react';

function Frutas() {
  const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    // Simulación de la una api de frutas 
    const obtenerInformacionFrutas = async () => {
      const datosSimulados = [
        { nombre: 'Manzana', color: 'Rojo', vitaminas: ['A', 'C'], imagen: 'https://www.recetasnestle.com.co/sites/default/files/inline-images/tipos-de-manzana-royal-gala_0.jpg', estado:'Avalible' },
        { nombre: 'Plátano', color: 'Amarillo', vitaminas: ['B6', 'C'], imagen: 'https://img.freepik.com/foto-gratis/platano-unico-aislado-sobre-fondo-blanco_839833-17794.jpg' },
        { nombre: 'Naranja', color: 'Naranja', vitaminas: ['C'], imagen: 'https://i0.wp.com/historiasdelahistoria.com/wordpress-2.3.1-ES-0.1-FULL/wp-content/uploads/2015/11/naranja.jpg?ssl=1' },
        { nombre: 'Fresa', color: 'Rojo', vitaminas: ['C'], imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQ5y8jbIz-HWhwS9epZeVfcmGi2m5FpIaOg&usqp=CAU', estado:'Avalible' },
        { nombre: 'Pera', color: 'Verde', vitaminas: ['C','K'], imagen: 'https://lavaquita.co/cdn/shop/products/4862b309-63db-4a89-9c91-96ff13354098_700x700.png?v=1622197530' },
        { nombre: 'Kiwi', color: 'Verde', vitaminas: ['C','K'], imagen: 'https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/14.jpg' },
        { nombre: 'Uva', color: 'Morado', vitaminas: ['C'], imagen: 'https://blog.nutricionyfarmacia.com/wp-content/uploads/2022/09/Uvas.jpg', estado:'Avalible' },
        { nombre: 'Sandia', color: 'Verde', vitaminas: ['A','C'], imagen: 'https://agrosemval.com/wp-content/uploads/2020/05/sandia-crimson-sweet-ipc-01.jpg' },
      ];

      setFrutas(datosSimulados);
    };

    obtenerInformacionFrutas();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 justify-center bg-cover bg-opacity-25" style={{"background-image" : "url('../src/assets/bg.jpg')"}}>
    <h1 className="text-2xl font-bold col-span-3 mb-4 pb-6 text-center">Lista de Productos</h1>
    {frutas.map(fruta => (
      <div className='flex intems-center justify-center flex'>
        <div key={fruta.id} className="text-center relative w-[320px] h-[400px]  flex flex-col justify-between">
          <img src={fruta.imagen} alt={fruta.nombre} className='relative w-full h-[240px] rounded-2xl before:absolute before:bottom-0 before:left-1/2 before:w-[25px] before:h-[25px] before:bg-transparent before:rounded-full before:shadow-before after:absolute after:bottom-[70px] after:left-0 after:w-[25px] after:h-[25px] after:bg-transparent after:rounded-full after:shadow-after bg-cover' />
          <div className='relative w-full h-[150px] bg-emerald-800 rounded-2xl rounded-tl-none'>
            <span className='absolute left-0 w-1/2 h-[80px] -top-[80px] bg-emerald-800 border-t-[10px] boder-r-[10px] border-white rounded-tr-[25px] before:absolute before:w-[25px] before:h-[25px] before:bg-transparent before:rounded-full before:shadow-before2 after:absolute after:bottom-0 after:-right-[25px] after:w-[25px] after:h-[25px] after:bg-trasparent after:rounded-full after:shadow-after2' >
                    <p className='relative bg-white text-black py-3 px-4 m-4 block rounded-lg font-medium'>Avalible</p>
            </span>
            <strong className='mb-2 font-medium'>{fruta.nombre}</strong><br />
            Tipo: {fruta.tipo}<br />
            Color: {fruta.color}<br />
            Vitaminas: {fruta.vitaminas.join(', ')}
          </div>
        </div>
      </div>
    ))}
  </div>
);
}

export default Frutas;
           

