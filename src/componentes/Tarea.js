import React from 'react';

function Tarea(){
   return (
      <div className='tarea-contenedor'>
         <div className='tarea-texto'>
            {texto}
         </div>
         <div className='tarea-icono'>
            Eliminar
         </div>
      </div>
   )
}

export default Tarea;