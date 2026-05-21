function obtenerCarrito() {

    let carritoString = localStorage.getItem("carrito");
    if(carritoString == null){
        return [];
    }
    return JSON.parse(carritoString);
}

function cargarProductosCarrito() {

    let tabla = document.getElementById("tabla-carrito");
    let carrito = obtenerCarrito();
    let total = 0;

    if(carrito.length === 0){
        document.getElementById("valor-final").textContent = "el valor total es 0";
        tabla.innerHTML = `
                <tr class="fila-header-carrito">
                    <td class="celda-header-tabla-carrito">Nombre del producto</td>
                    <td class="celda-header-tabla-carrito">Cantidad</td>
                    <td class="celda-header-tabla-carrito">Precio unitario</td>
                </tr>`
        return;
    }

    carrito.forEach(producto => {

        if(producto.cantidad > 0){
            tabla.innerHTML += 
            `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
            </tr>
            `
        }
        total += producto.precio * producto.cantidad
    });
    document.getElementById("valor-final").textContent = "El valor final a pagar es de $"+total;
}



function limpiarCarrito() 
{
    localStorage.removeItem("carrito")
    alert("Carrito limpiado correctamente");
    cargarProductosCarrito();
}
cargarProductosCarrito();