import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Frase({frase}){
  return(
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </div>
  );
}

function App(){

  const [frase, obtenerFrase] = useState({});

  // Consulta a una REST API
  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    // Agregar el resultado de la API al state
    obtenerFrase(resultado.data[0])
  }

  // Se consulta la API cuando el componente está listo o se actualiza
  useEffect(() => {
      consultarAPI();
  }, []);

  return(
    <div className="contenedor">
      <Frase 
        frase={frase}
      />
      <button
        onClick={consultarAPI}
      >Generar nueva frase</button>
    </div>
  );
}
export default App;