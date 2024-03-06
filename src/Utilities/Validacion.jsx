import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Define el componente funcional Validacion
export default function Validacion() {
  // Función para decodificar el token JWT
  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  // Verificar si el token existe y aún es válido
  const tokenExistAndStillValid = (
    parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now()
  );

  // Devuelve una expresión condicional basada en el estado del token
  return (
    <>
      {/* Si el token existe y es válido, renderiza el contenido dentro de Outlet */}
      {tokenExistAndStillValid ? <Outlet /> : <Navigate to="/" />}
    </>
  );
}
