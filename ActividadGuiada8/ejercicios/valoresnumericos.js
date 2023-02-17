const suma = (vals) => {
    let suma = 0;
    vals.forEach((val) => {
        suma += val;        
    });
    return suma;
};

const positivos = (valores) => {
    return valores.filter((x) => { return x > 0;});
};

const negativos = (valores) => {
    return valores.filter((x) => { return x < 0;});
};

const esPrimo = numero => {
    // Casos especiales
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
}
const primos = (valores)=>{
    return valores.filter((x)=>{return esPrimo(x);})
}

module.exports={suma,positivos,negativos,esPrimo,primos};