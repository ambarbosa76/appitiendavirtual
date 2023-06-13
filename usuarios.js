import { buscarTodosLosUsuarios } from "./api.js";

const root = document.getElementById("root");

async function mostrarUsuarios() {
  const usuarios = await buscarTodosLosUsuarios();

  console.log(usuarios);
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i]; 
    root.innerHTML += `  
        <div class="card">
          <img src=${usuario.imagen}/>
          <div class="card-content-usuarios">
            <span id="name">NOMBRE: ${usuario.nombre}</span>
            <span id="name">APELLIDO: ${usuario.apellido}</span>
            <span id="name">USUARIO: ${usuario.nomusuario}</span>
            <span id="name">TELEFONO: ${usuario.telefono}</span>
            <span>EMAIL: ${usuario.correo}</span>                    
          </div>
        </div>`;
  }
}

mostrarUsuarios();
