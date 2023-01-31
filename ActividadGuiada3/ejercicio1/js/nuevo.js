const quitarDuplicados = (arr = undefined) => {
    if(arr == undefined) {
        return console.warn("no ingresaste un arreglo");
    } else if (!(arr instanceof Array)) {
        return console.error("El valor que ingresaste no es un arreglo");
    } else if (arr.length === 0) {
        return console.error("El arreglo está vacío");
    } else if (arr.length === 1) {
        return console.error("El arreglo tiene un solo elemento");
    } else {
        /*
        return console.info(
            {
                "original" : arr , 
                "sinDuplicados": arr.filter((valor,indice,self) => 
                    self.indexOf(valor) === indice ) 
            });}
        */
       return console.info(
        {
            "original" : arr,
            "sinDuplicados" : [...new Set(arr)]
        }
       );
    }
};

quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(["10","X","X","2","10",10,true, true]);