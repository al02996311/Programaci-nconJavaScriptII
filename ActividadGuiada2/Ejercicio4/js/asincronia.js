////////// ejercicio 4

async function funcionAsincronaDeclarada () {
    try {
        console.log("Inicio Async Function");
        let obj = await cuadradoAsincrona(0);
        console.log(`Async Function: ${obj.value},${obj.result}`);
        obj = await cuadradoAsincrona(1);
        console.log(`Async Function: ${obj.value},${obj.result}`);
        obj = await cuadradoAsincrona(2);
        console.log(`Async Function: ${obj.value},${obj.result}`);
        obj = await cuadradoAsincrona(3);
        console.log(`Async Function: ${obj.value},${obj.result}`);
        obj = await cuadradoAsincrona(4);
        console.log(`Async Function: ${obj.value},${obj.result}`);
        obj = await cuadradoAsincrona(5);
        console.log(`Async Function: ${obj.value},${obj.result}`);
        console.log("Fin Async Function")

    }
    catch (error) {
        console.error(error);
    }        
}

function cuadradoAsincrona(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}


funcionAsincronaDeclarada();
