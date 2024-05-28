document.addEventListener('DOMContentLoaded', () => {
    const contenedorProductos = document.getElementById('contenedor-productos');
    
   

    fetch('productos.json')
        .then((resp) => resp.json())
        .then((data) => {
            data.forEach((prod) => {
                const div = document.createElement('div');
                div.classList.add('producto');
                div.innerHTML = `
                    <img src="${prod.img}" alt="${prod.nombre}">
                    <h3>${prod.nombre}</h3>
                    <p>${prod.desc}</p>
                    <p class="precioProducto">Precio: $${prod.precio}</p>
               `;
                contenedorProductos.appendChild(div);
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});



