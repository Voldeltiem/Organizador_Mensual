import React, { useState, useContext } from 'react'
import Contexto from '../contex/contexto';
import axios from 'axios';

export default function Registro() {
    const { urlApi } = useContext(Contexto);
    const [repeatPassword, setRepeatPassword] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [Email, setEmail] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        const data = {
            email: Email,
            nombre: nombre,
            password: password
        }


        try {
            if (password !== repeatPassword) {
                alert("Las Contraseñas no coinciden")
            } else if (password === "" || nombre === "" || Email === "") {
                alert("Tiene campos vacios")
            } else {
                const response = await axios.post(`${urlApi}/registro`, data);
                console.log(response);
                alert(response.data.message);
                
            }
        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div className='caja'>
            Registro
            <form onSubmit={sendData} className='caja'>
                <p>Nombre de usuario</p>
                <input value={nombre} onChange={(e) => { setNombre(e.target.value) }} type="user" placeholder='Usuario123' />
                <p>E-mail</p>
                <input value={Email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Usuario@usuario123' />
                <p>Contraseña</p>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Usuario123' />
                <input value={repeatPassword} onChange={(e) => { setRepeatPassword(e.target.value) }} type="password" placeholder='Usuario123' />
                <button type='submit'>Registrar</button>
            </form>
        </div>
    )
}
