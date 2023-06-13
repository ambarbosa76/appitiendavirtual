const url = "https://fakestoreapi.com"
export async function buscarTodosLosProductos() {
	const data = await fetch(`${url}/products`);
    const dataJson = await data.json();
    const resultadosObtenidos = dataJson;
    const resultadosFormateados = [];
    resultadosObtenidos.forEach((producto) => {
        let productoReducido = {
            idproducto:producto.id,
            nombre: producto.title,
            descripcion:producto.description,
            precio:producto.price,
            categoria:producto.category,
            imagen: producto.image,
        };
        resultadosFormateados.push(productoReducido);         
    });
    return resultadosFormateados;     
};

export async function buscarProductosPorCategoria(nombreDeCategoria) {
    const data = await fetch(`${url}/products/category/${nombreDeCategoria}`); 
    const dataJson = await data.json();
    const resultadosObtenidos = dataJson; 
    const resultadosFormateados = [];
    resultadosObtenidos.forEach((producto) => {
        let productoFormateado = {
            idproducto:producto.id,
            nombre: producto.title,
            descripcion:producto.description,
            precio:producto.price,
            categoria:producto.category,
            imagen: producto.image,
        };
        resultadosFormateados.push(productoFormateado);
    });
      return resultadosFormateados;
}
  
  export async function buscarTodosLosUsuarios() {
    const data = await fetch(`${url}/users`); 
    const dataJson = await data.json();
    const resultadosObtenidos = dataJson;
    const resultadosFormateados = []; 
    let contador=100;
    resultadosObtenidos.forEach((usuario) => {
      contador=contador+10;
      let usuarioFormateado = {
        telefono: usuario.phone,
        nombre: usuario.name.firstname,
        apellido: usuario.name.lastname,
        nomusuario: usuario.username,
        correo: usuario.email,
        imagen: `https://loremflickr.com/${contador}/480/people`,
        };
  
       resultadosFormateados.push(usuarioFormateado);
    });
    return resultadosFormateados;
}
export async function buscarDetalle(id) {
    const data = await fetch(`${url}/products`);
    const dataJson = await data.json();
    const resultadosObtenidos = dataJson; 
    const resultadosFormateados = [];
    resultadosObtenidos.forEach((producto) => {
        let productoFormateado = {
            idproducto:producto.id,
            nombre: producto.title,
            descripcion:producto.description,
            imagen: producto.image,
            cantidad:producto.rating.count,
        };
        resultadosFormateados.push(productoFormateado);
    });
      return resultadosFormateados;
}

  