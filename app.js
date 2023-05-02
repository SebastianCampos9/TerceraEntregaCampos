let carrito = [];


const nuevaRemera = [new remera("Roja", "L", 3, "Algodon", 1200, 3), new remera("Verde" , "S", 2, "Algodon", 1100, 2), new remera("Azul", "M", 4, "Algodon", 1200, 4)]



const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");

boton1.addEventListener('click', () => {
const remera = nuevaRemera.find((remera) => {

 return remera.id === +boton1.dataset.id

});

carrito.push(remera);
mostrarElCarrito();
});

boton1.addEventListener('click', () => {
const remera = nuevaRemera.find((remera) => {

 return remera.id === +boton2.dataset.id

});

carrito.push(remera);
mostrarElCarrito();
});

boton1.addEventListener('click', () => {
const remera = nuevaRemera.find((remera) => {

 return remera.id === +boton3.dataset.id

});

carrito.push(remera);
mostrarElCarrito();
});

boton1.addEventListener('click', () => {
const remera = nuevaRemera.find((remera) => {

 return remera.id === +boton4.dataset.id

});

carrito.push(remera);
mostrarElCarrito();
});

boton1.addEventListener('click', () => {
const remera = nuevaRemera.find((remera) => {

 return remera.id === +boton5.dataset.id

});

carrito.push(remera);
mostrarElCarrito();
});

boton1.addEventListener('click', () => {
const remera = nuevaRemera.find((remera) => {

 return remera.id === +boton6.dataset.id

});

carrito.push(remera);
mostrarElCarrito();
});

boton1.addEventListener('click', () => {
const remera = nuevaRemera.find((remera) => {

 return remera.id === +boton7.dataset.id

});

carrito.push(remera);
mostrarElCarrito();
});

boton1.addEventListener('click', () => {
const remera = nuevaRemera.find((remera) => {

 return remera.id === +boton8.dataset.id

});

carrito.push(remera);
mostrarElCarrito();
});


function mostrarElCarrito() {
    const tabla = document.getElementById('remera');
    tabla.innerHTML = ``;
    let counter = 1;

    carrito.forEach((remera) => {
       tabla.innerHTML += `
            <tr>
                <th>${counter}</th>
                <td> ${remera.color} </td>
                <td> ${remera.talle} </td>
                <td> ${remera.modelo} </td>
                <td> ${remera.material} </td>
                <td> ${remera.precio} </td>
                <td> ${remera.id} </td>
            </tr>
       `;
       counter++;
       console.log(tabla.innerHTML);
    });
}