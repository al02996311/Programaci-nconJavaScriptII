function cuadrado (valor) {
    console.log(setTimeout(() => {
        return {valor : resultado};
    }) , 0 || Math.random() * 1000);
}

function* generador () {
    console.log("Inicia Generador");
    yield 0;
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    console.log("Termina Generador");
}

let gen  = generador();

for (const iterator of gen) {
    console.log(iterator);
}

