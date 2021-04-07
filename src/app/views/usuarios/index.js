import React from 'react'
import {Empleados} from '../../api/usuarios/index'

export const Registro = () => {
     return (
         <div>
             <div className= "titulo-registro">
                <label>REGISTRO DE NUEVO EMPLEADO</label>
             </div>
             <div className= "cuestionario-design" >
                <label>Nombre(s): </label>
                <input id="name" type="text" placeholder="Ingresa nombre(s)"/>
                <label>Apellido paterno: </label>
                <input id="ape_father" type="text" placeholder="Ingresa apellido paterno"/>
                <label>Apellido materno: </label>
                <input id="ape_mother" type="text" placeholder="Ingresa apellido materno"/>
                <label>Teléfono: </label>
                <input id="phone" type="number" placeholder="Ingresa teléfono"/>
                <label>Correo electrónico: </label>
                <input id="email" type="email" placeholder="Ingresa correo electrónico"/>
                <label>Nuevo usuario: </label>
                <input id="user" type="text" placeholder="Ingresa usuario"/>
                <label>Contraseña: </label>
                <input id="password" type="password" placeholder="Ingresa contraseña"/>
                <label>Pendiente el cargo del empleado </label>
             </div>
             <div className = "botones">
                 <button onClick= {procesoDataInput} >REGISTRAR</button>
             </div>
                
         </div>
     )
}

const procesoDataInput = async () => {
    const name = document.getElementById('name').value;
    const ape_father = document.getElementById('ape_father').value;
    const ape_mother = document.getElementById('ape_mother').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    const data = {
        name: name,
        ape_father: ape_father,
        ape_mother: ape_mother,
        phone: phone,
        email: email,
        user: user,
        password: password,
        id_rol: 1
    }

    await Empleados(data)
}