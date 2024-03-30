import React, { useContext, useEffect, useState } from 'react'
import Contexto from '../contex/contexto';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Perfil() {
  const token = localStorage.getItem("token");
  const {urlApi} = useContext(Contexto);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate()

  const handleGetData = async () =>{
    const response = await axios.post(`${urlApi}/perfil`, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setUserData(response.data);
    
  }

  const handleOut = () => {
    localStorage.clear();
    navigate("/")
  }

  useEffect(()=>{
    handleGetData();
    console.log(userData)
    },[]);


  return (
    <div className='caja'>
      <h1>Hola : {userData.username}</h1>
      <p>Tu ID es: {userData.id}</p>
      <p>E-mail: {userData.email}</p>
      <p>JWT: {userData.password}</p>
      <button onClick={handleOut} className='caja'>Salir</button>
    </div>
  )
}
