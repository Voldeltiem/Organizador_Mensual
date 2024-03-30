// Importaciones de componentes y utilidades
import Inicio from "./views/Inicio";
import { useContext, useState, useEffect } from "react";
import Contexto from "./contex/contexto";
import Validacion from "./Utilities/Validacion";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Perfil from "./views/Perfil";
import Despensa from "./views/Despensa";
import Lista_de_compras from "./views/Lista_de_compras";

// Componente principal de la aplicación
function App() {
  // Estado para la URL de la API
  const [urlApi, setUrlApi] = useState('http://localhost:3000');

  // Renderiza la interfaz de la aplicación
  return (
    <>
      {/* Proporciona el contexto a los componentes hijos */}
      <Contexto.Provider value={{ urlApi, setUrlApi }}>
        {/* Configura las rutas de la aplicación con BrowserRouter y Routes */}
        <BrowserRouter>
          <Routes>
            {/* Ruta comodín para redirigir cualquier ruta desconocida a la ruta principal */}
            <Route path="*" element={<Navigate to="/" />} />
            
            {/* Ruta principal que renderiza el componente Inicio */}
            <Route path="/" element={<Inicio />} />

            {/* Ruta con Validacion que decide entre Inicio y Perfil basándose en la autenticación */}
            <Route path="/" element={<Validacion/>}>
              {/* Ruta secundaria para el perfil, renderiza el componente Perfil */}
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/despensa" element={<Despensa />} />
              <Route path="/listaDeCompras" element={<Lista_de_compras />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros lugares de la aplicación
export default App;
