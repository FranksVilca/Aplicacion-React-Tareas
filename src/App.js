import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo (1).png';
import ListaDeTarea from './componentes/ListaDeTareas';

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
        <ListaDeTarea/>
      </div>
    </div>
  );
}

export default App;
