const catalogo = [
{
    nombre:"remera Fila",
    talle:"m",
    id:"remera",
    codigo:"r1",
    precio:1000,
},
{
    nombre:"remera Nike",
    talle:"l",
    id:"remera",
    codigo:"r2",
    precio:1000,
},
{
    nombre:"remera Adidas",
    talle:"xl",
    id:"remera",
    codigo:"r3",
    precio:1000,
},
{
    nombre:"buzo Fila",
    talle:"m",
    id:"buzo",
    codigo:"b1",
    precio:5000,
},
{
    nombre:"buzo Nike",
    talle:"l",
    id:"buzo",
    codigo:"b2",
    precio:5000,
},
{
    nombre:"buzo Adidas",
    talle:"xl",
    id:"buzo",
    codigo:"b3",
    precio:5000,
},
{
    nombre:"pantalon Fila",
    talle:"s",
    id:"pantalon",
    codigo:"p1",
    precio:3000,
},
{
    nombre:"pantalon Nike",
    talle:"l",
    id:"pantalon",
    codigo:"p2",
    precio:3000,
},
{
    nombre:"pantalon Adidad",
    talle:"xl",
    id:"pantalon",
    codigo:"p3",
    precio:3000,
},

];

const remeras = catalogo.filter((producto)=>producto.id === "remera");
const buzos = catalogo.filter((producto)=>producto.id === "buzo");
const pantalones = catalogo.filter((producto)=>producto.id === "pantalon");

let filtro = prompt ('ingresa:\n1) para remeras \n2) para buzos \n3) para pantalones')

function saludo(){
    if (filtro == "1"){
        for (const item of remeras){
            console.log(`${item.nombre}/${item.talle}/${item.id}/codigo:${item.codigo}/${item.precio}`)
        }
    }
    if (filtro == "2"){
        for (const item of buzos){
            console.log(`${item.nombre}/${item.talle}/${item.id}/codigo:${item.codigo}/${item.precio}`)
        }
    }
    if (filtro == "3"){
        for (const item of pantalones){
            console.log(`${item.nombre}/${item.talle}/${item.id}/codigo:${item.codigo}/${item.precio}`)
        }
    }
    
}
saludo()

let carrito = [];

function comprar(){
    let buy = prompt ("Ingresa el codigo del producto que deseas comprar")
    console.log(catalogo.find((producto)=> buy === producto.codigo))
    carrito.push(buy)
    console.log(carrito)
}

comprar()

function comprarMas(){
    let continuarCompra = prompt ("Desea continuar comprando?\n 1)Si\n 2)No\n 3)Deseas comprar otro tipo de prenda")
    if (continuarCompra == "1") {
        let buy = prompt ("Ingresa el codigo del producto que deseas comprar")
    console.log(catalogo.find((producto)=> buy === producto.codigo))
    carrito.push(buy)
    console.log(carrito)
    comprarMas()
    }
    
    if (continuarCompra == "2") {
        alert("Gracias por su compra")
    }
    if (continuarCompra == "3") {
        let filtro = prompt ('ingresa:\n1) para remeras \n2) para buzos \n3) para pantalones')
        if (filtro == "1"){
            for (const item of remeras){
                console.log(`${item.nombre}/${item.talle}/${item.id}/codigo:${item.codigo}/precio:$${item.precio}`)
            }
        }
        if (filtro == "2"){
            for (const item of buzos){
                console.log(`${item.nombre}/${item.talle}/${item.id}/codigo:${item.codigo}/precio:$${item.precio}`)
            }
        }
        if (filtro == "3"){
            for (const item of pantalones){
                console.log(`${item.nombre}/${item.talle}/${item.id}/codigo:${item.codigo}/precio:$${item.precio}`)
            }
        }
        comprar()
        comprarMas()
    }
}



comprarMas()

