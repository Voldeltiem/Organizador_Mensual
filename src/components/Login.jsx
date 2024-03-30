import React, { useContext, useState } from 'react';
import axios from 'axios';
import Contexto from '../contex/contexto';
import { useNavigate } from 'react-router-dom';

// Define y exporta el componente funcional Login
export default function Login() {
  // Estados locales para almacenar el usuario, la contraseña y el estado de inicio de sesión
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  // useContext se utiliza para acceder al contexto proporcionado por el componente superior
  const { urlApi } = useContext(Contexto);

  // useNavigate se utiliza para obtener la función de navegación del enrutador
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleUsuario = async (e) => {
    e.preventDefault();

    // Objeto de datos a enviar al servidor
    const data = {
      email: email,
      password: password
    };

    try {
      // Petición de inicio de sesión al servidor usando axios
      const respuesta = await axios.post(`${urlApi}/login`, data);

      // Obtener el token del servidor y decodificarlo
      const token = respuesta.data.token;

      // Verificar si la respuesta del servidor es exitosa
      if (respuesta.data) {
        // Almacenar el token en el almacenamiento local
        localStorage.setItem('token', token);
        // Establecer el estado de inicio de sesión como exitoso
        setLoginSuccessful(true);
        // Navegar a la ruta '/perfil'
        navigate("/perfil");
      } else {
        // En caso de respuesta no exitosa, establecer el estado de inicio de sesión como fallido
        setLoginSuccessful(false);
      }
    } catch (error) {
      // Manejar errores de la petición
      console.log('Error al enviar datos al servidor: ', error);
    }
  };

  // Devuelve la interfaz del componente Login
  return (
    <div className='caja'>
      Login
      <form>
        {/* Input para el email de usuario */}
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }} type="email" placeholder='email' />
        {/* Input para la contraseña */}
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }} type="password" placeholder='Password' />
        {/* Botón de envío del formulario */}
        <button type='submit' onClick={handleUsuario}>Ingresar</button>
      </form>
    </div>
  );
}
