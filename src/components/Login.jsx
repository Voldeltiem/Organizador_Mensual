import React, { useContext, useState } from 'react'
import axios from 'axios'
import Contexto from '../contex/contexto'

export default function Login() {
  const [ usuario, setUsuario ] = useState("")
  const [ password, setPassword ] = useState("")
  const {urlApi} = useContext(Contexto)


  const handleUsuario = async (e) => {
    e.preventDefault()
    const data = {
      username: usuario,
      password: password
    }
    try {
      const respuesta = await axios.post(`${urlApi}/login`, data)
      console.log(respuesta.data)

    } catch (error) {
      console.log('Error al enviar datos al servidor: ', error)
    }
    
  }
  return (
    <div className='caja'>
      Login
      <form>
        <input
        value={usuario}
         onChange={(e)=>{
          setUsuario(e.target.value)
        }
        } type="text" placeholder='Usuario' />
        <input
        value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
        }
        } type="password" placeholder='Password' />
        <button type='submit' onClick={handleUsuario}>Ingresar</button>
      </form>
    </div>
  )
}
