
const juan = "Juan";
const pedro = "Pedro";

console.log(juan);

const saludar = (nombre) => {
    console.log(`Hola mundo con ${nombre}`)
};

function hablar(nombre){
    console.log(`Hola mundo con ${nombre}`);
}

console.log(saludar("Pepino"));
console.log(saludar(juan));
console.log(saludar(pedro));

console.log(hablar(pedro));




