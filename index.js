let hamburguesas = [
    {'id': 1, 'nombre': 'Armonia', 'precio': 12000, 'descripcion': 'Doble medallón de carne, queso cheddar, queso roquefort, huevo frito y pan con queso gratinado.', 'img': './assets/hamburguesas/burga-5.jpg', cantidad: 0},
    {'id': 2, 'nombre': 'Doble batalla', 'precio': 15000, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble beacon, cebolla caramelizada y pan con semillas de sésamo.', 'img': './assets/hamburguesas/burga-2.jpg', cantidad: 0},
    {'id': 3, 'nombre': 'Clásica Law', 'precio': 9000, 'descripcion': 'Medallón de carne, queso cheddar, panceta, cebolla crispy, salsa barbacoa, tomate, lechuga y pan con semillas de sésamo.', 'img': './assets/hamburguesas/burga-3.jpg', cantidad: 0},
    {'id': 4, 'nombre': 'Exotically', 'precio': 16500, 'descripcion': 'Medallón de carne, doble queso roquefort, rúcula, cebolla caramelizada, tomate, hongo portobello salteado y pan brioche con semillas.', 'img': './assets/hamburguesas/burga-4.jpg', cantidad: 0},
    {'id': 5, 'nombre': 'La Bestia', 'precio': 19000, 'descripcion': 'Quíntuple medallón de carne, 5 capas de cheddar, panceta en cada piso, cheddar en cada piso, queso especial derretido y pan con queso gratinado.', 'img': './assets/hamburguesas/burga-5.jpg', cantidad: 0},
    {'id': 6, 'nombre': 'Nuggy Chop', 'precio': 14500, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble panceta, cebolla caramelizada, Nuggets de muzzarella y pan con queso gratinado.', 'img': './assets/hamburguesas/burga-6.jpg', cantidad: 0},
]

let bebidas = [
     {'id': 7, 'nombre': 'Agua sin gas (1L)', 'precio': 2000, 'descripcion': 'Botella 1 litro agua Villavicencio sin gas.', 'img': './assets/bebidas/agua-con-gas.png', cantidad: 0},
    {'id': 8, 'nombre': 'Agua con gas (1L)', 'precio': 1500, 'descripcion': 'Botella 1 litro agua Saldan con gas.', 'img': './assets/bebidas/agua-sin-gas.png', cantidad: 0},
    {'id': 9, 'nombre': 'Aquarius Manzana (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de manzana.', 'img': './assets/bebidas/aquarius-manzana.png', cantidad: 0},
    {'id': 10, 'nombre': 'Aquarius Pomelo (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de pomelo.', 'img': './assets/bebidas/aquarius-pomelo.png', cantidad: 0},
    {'id': 11, 'nombre': 'Aquarius Naranja (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de naranja.', 'img': './assets/bebidas/aquarius-naranja.png', cantidad: 0},
    {'id': 12, 'nombre': 'Coca-Cola (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Coca-Cola.', 'img': './assets/bebidas/coca-cola.png', cantidad: 0},
    {'id': 13, 'nombre': 'Sprite (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Sprite.', 'img': './assets/bebidas/sprite.png', cantidad: 0},
]

let tragos = [
    {'id': 14, 'nombre': 'Campari', 'precio': 6000, 'descripcion': 'Vaso de Campari y jugo de naranja.', 'img': './assets/tragos/campari.png', cantidad: 0},
    {'id': 15, 'nombre': 'Fernet', 'precio': 7000, 'descripcion': 'Vaso de Coca-Cola y Fernet.', 'img': './assets/tragos/fernet.png', cantidad: 0},
    {'id': 16, 'nombre': 'Gancia', 'precio': 6000, 'descripcion': 'Vaso de Gancia y Sprite.', 'img': './assets/tragos/gancia.png', cantidad: 0},
    {'id': 17, 'nombre': 'Ron Havana Club', 'precio': 9000, 'descripcion': 'Vaso de Ron y Coca-Cola.', 'img': './assets/tragos/ron.png', cantidad: 0},
    {'id': 18, 'nombre': 'Daiquiri', 'precio': 7000, 'descripcion': 'Vaso de Daiquiri.', 'img': './assets/tragos/daiquiri.png', cantidad: 0},
]
//hola profes agregue la propiedad cantidad asi se me hace mas facil 
// poder sumar al carrito y restar del carrito mas facil 
function sumarAlCarrito(id) {

    let producto = hamburguesas.find(producto => producto.id === id) || bebidas.find(producto => producto.id === id) || tragos.find(producto => producto.id === id)  
    
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    
    if(carrito === null)
    {
        carrito = [];
    }
    
    let prodExistente = carrito.find(producto => producto.id === id);
    
    if(prodExistente)
    {
        prodExistente.cantidad += 1;        
    }else
    {
        carrito.push({...producto, cantidad:1});
    }
    
    console.log(carrito);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    alert(`Un/una: ${producto.nombre} fue agregado al carrito!`);
}

function restarDelCarrito(id) {
    
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    
    if(carrito === null || carrito.length === 0)
    {
        alert("El carrito se enceuntra vacio!");
        return;
    }

    let prodExistente = carrito.find(producto => producto.id == id);

    

    if(!prodExistente)
    {
        alert(`Este producto no existe en su carrito`);
    }
   
    prodExistente.cantidad -= 1;

    alert(`Un/una: ${prodExistente.nombre} fue eliminado del carrito!`)

    if(prodExistente.cantidad === 0){
        let indiceProducto = carrito.findIndex(producto => producto.id === id);
        carrito.splice(indiceProducto,1);
    }

    console.log(carrito);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarProductos(section, id){
    
    let contenedorProducto = document.getElementById(id);
    
    contenedorProducto.innerHTML= "";
    
    section.forEach(producto => 
    {
        contenedorProducto.innerHTML += `
                <li class="li-hamburguesa">
                    <img class="img-producto" src="${producto.img}" alt="${producto.nombre}">
                    <div>
                        <h3 class="nombre-producto">${producto.nombre}</h3>
                        <p class="precio-producto">$${producto.precio}</p>
                        <p class="descripcion-producto">${producto.descripcion}</p>
                    </div>
                    <button class="btn-sumar-a-carrito" onclick="sumarAlCarrito(${producto.id})"> + </button>
                    <button class="btn-restar-a-carrito" onclick="restarDelCarrito(${producto.id})"> - </button>
                </li>`
     }); 
}

mostrarProductos(hamburguesas,"listado-hamburguesas");
mostrarProductos(bebidas,"listado-bebidas");
mostrarProductos(tragos,"listado-tragos");




