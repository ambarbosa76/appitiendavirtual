import {
    buscarTodosLosProductos,
    buscarProductosPorCategoria,
    buscarDetalle
}    from "./api.js";

const root = document.getElementById("root");
async function mostrarProductos(){
    const idDeboton = [];
    const productos = await buscarTodosLosProductos()
        for(let i = 0; i < productos.length; i++) {
            const producto = productos[i];
            idDeboton.push(producto.idproducto);
            root.innerHTML += `
            <div class="card"> 
                <img src=${producto.imagen} />
                <div class="card-content">
                    <p>${producto.nombre}</p>
                    <span>${producto.descripcion.slice(0,25)}...</span>
                    <span>${producto.categoria}</span>
                    <span>$ ${producto.precio}</span>
                    <button id=${producto.idproducto}  class="btn btn-outline-success" type="submit">
                  VER MAS
                 </button>
                </div>
            </div>
            `;
        }
        for (let i = 0; i < idDeboton.length; i++) {
            const id = idDeboton[i];
            const descripcion = await buscarDetalle(id);
            const botonVerMas = document.getElementById(id);
            botonVerMas.addEventListener("click", (event) => {
              event.preventDefault();
              const producto = descripcion[i];

                window.alert(`CARACTERISTICAS:  ${producto.descripcion}\n UNIDADES DISPONIBLES: ${producto.cantidad}`);
            });
          }
        
 }
mostrarProductos()
buscador.addEventListener("submit", async (e) => {
  e.preventDefault();
  root.innerHTML = `<img  class="wait" src="https://media.tenor.com/t5DMW5PI8mgAAAAi/loading-green-loading.gif" />`;
  const nombreDeCategoria = document.getElementById("input-buscar").value; 
  const productos = await buscarProductosPorCategoria(nombreDeCategoria); 
  root.innerHTML = ``;
    for (let i = 0; i < productos.length; i++) {
    const producto = productos[i]; 
    const idDeboton = [];
    idDeboton.push(producto.idproducto);
    console.log(idDeboton);
    root.innerHTML += `
    <div class="card"> 
        <img src=${producto.imagen} />
        <div class="card-content">
            <p>${producto.nombre}</p>
            <span>${producto.descripcion.slice(1,40)}...</span>
            <span>${producto.categoria}</span>
            <span>$ ${producto.precio}</span>
            <button id=${producto.idproducto}  class="btn btn-outline-success" type="submit">
            VER MAS
           </button>                 
        </div>
    </div>
    `;
     
 
  }
});
