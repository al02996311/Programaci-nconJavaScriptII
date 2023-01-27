////////////// Ejercicio 1

(function() {
    console.log("Código Síncrono");
    console.log("Inicio")
})();

function dos () {
    console.log("Dos");
}

function uno () {
    console.log("Uno");
    dos();
    console.log("Tres");
}

uno();
console.log("Fin");

(function() {
    console.log("Código Asíncrono");
    console.log("Inicio")
})();

function dos () {
    console.log("Dos");
}

function uno (){
    setTimeout(() => {
        console.log("Uno")
    },0);
    dos();
    console.log("Tres");
}

uno();
console.log("Fin");
