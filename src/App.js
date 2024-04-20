import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo (1).png';
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
        />
      </div>
    </div>
  );
}

export default App;
