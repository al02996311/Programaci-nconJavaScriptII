function limpiAnagrama (arr) {
    let obj = {};
    for (let i = 0;i < arr.length; i++) {
        let ordenado = arr[i].toLowerCase().split("").sort().join("");
        obj[ordenado] = arr[i];
    }
    return Object.values(obj);

}

const arreglo1 = ["roma","amor","mora","Roma"];
const arreglo2 = ["sopa","paso","sapo"];
const arreglo3 = ["ropa","paro","proa"];

alert(limpiAnagrama(arreglo1));
alert(limpiAnagrama(arreglo2));
alert(limpiAnagrama(arreglo3));

const limpiaAnagramaMap = (arr) => {
    let mapa = new Map();
    for (const iterator of arr) {
        let ordenado = iterator.toLowerCase().split("").sort().join("");
        mapa.set(ordenado,iterator);
    }

    return Array.from(mapa.values());

};

alert(limpiaAnagramaMap(arreglo1));
alert(limpiaAnagramaMap(arreglo2));
alert(limpiaAnagramaMap(arreglo3));
