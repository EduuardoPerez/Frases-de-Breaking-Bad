import React, {useState, useEffect} from 'react';
import axios from 'axios';

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

  console.log(frase)
  return <p>hola</p>
}
export default App;