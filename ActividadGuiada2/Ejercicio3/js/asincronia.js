//// Ejercicio 3

function cuadradoPromesa (value) {
    if (typeof value !== "number") {
        return Promise.reject(new Error (`Error, El valor ingresado ${value} no es un número`));       
    }

    return new Promise (
        (resolve) => {
            setTimeout(()=> {
                resolve({"value" : value, "result" : value*value});
            }, 0 | (Math.random() * 1000));
        }
    );
}

cuadradoPromesa(0);

cuadradoPromesa(0)
.then(
  (obj) => {
    console.log('Inicio Promesa');
    console.log(`Promesa: ${obj.value},${obj.result}`);
    return cuadradoPromesa(1);
  }  
)
.then(
    (obj) => {
      console.log(`Promesa: ${obj.value},${obj.result}`);
      return cuadradoPromesa(2);
    }  
  )

  .then(
    (obj) => {
      console.log(`Promesa: ${obj.value},${obj.result}`);
      return cuadradoPromesa(3);
    }  
  )

  .then(
    (obj) => {
      console.log(`Promesa: ${obj.value},${obj.result}`);
      return cuadradoPromesa('4');
    }  
  )
  .then(
    (obj) => {
      console.log(`Promesa: ${obj.value},${obj.result}`);
      return cuadradoPromesa(5);
    }  
  )
  .then(
    (obj) => {
      console.log(`Promesa: ${obj.value},${obj.result}`);
      console.log('Fin Promesa');
    }  
  )
.catch(
    error => {
        console.error(error);
    }  
);
