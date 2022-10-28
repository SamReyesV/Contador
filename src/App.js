import './App.css';
import Boton from "./componentes/Boton"
import freeCodeCampLogo from './imagenes/freecodecamp.png';
import Contador from './componentes/contador';
import { useState } from "react"

function App() {

  const [numDeClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics( numDeClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0)
  };


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
      <img className='freecodecamp-logo'
      src={freeCodeCampLogo}
      alt="Loogo de freecodecamp" 
      />
      </div>
      <div className='contenedo-prrincipal'>
      <Contador numDeClics ={numDeClics} />
      <Boton 
        texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
      <Boton 
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
