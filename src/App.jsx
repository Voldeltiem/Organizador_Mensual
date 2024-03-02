import Inicio from "./views/Inicio"
import { useContext, useState, useEffect } from "react";
import Contexto from "./contex/contexto";


function App() {
const [urlApi, setUrlApi] = useState('http://localhost:3000')

  return (
    <>
      <Contexto.Provider value={{urlApi, setUrlApi}}>
        <Inicio />
      </Contexto.Provider>
    </>
  )
}

export default App
