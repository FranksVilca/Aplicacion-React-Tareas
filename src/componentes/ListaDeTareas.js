import React from "react";
import TareaFormularios from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css'

function ListaDeTarea() {
  return( 
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        LISTA DE TAREAS
      </div>
    </>
  );
}

export default ListaDeTarea;

