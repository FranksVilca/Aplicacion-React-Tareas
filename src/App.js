import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo (1).png';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
        />
      </div>
      <div className='tareas-lista-princial'>
        <h1>Mis tareas</h1>
        <Tarea texto='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
