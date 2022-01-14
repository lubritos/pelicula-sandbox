import Pelicula from "./componentes/peliculas";
import "./styles.css";
import peli from "./api/peliculas.json";
import Buscador from "./componentes/buscador";
import { useState } from "react";

export default function App() {
  const [busqueda, setBusqueda] = useState(peli);
  const buscador = (valor) => {
    console.log(valor);
    const listado = peli.filter((p) => p.nombre.includes(valor));
    setBusqueda(listado);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Buscador search={buscador} />

      {busqueda.map((pelicula) => (
        <Pelicula {...pelicula} />
      ))}
    </div>
  );
}
