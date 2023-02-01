function cuadrado(valor) {
    let obj = new Object ();
    obj[valor]=valor*valor;
    setTimeout(function(){
        console.log(valor,Object.values(obj));
        }, Math.random() * 1000);
      
    return (valor, Object.values(obj));
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
    console.log(cuadrado(iterator));
}

