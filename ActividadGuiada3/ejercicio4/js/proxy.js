const persona = {
    nombre : "",
    apellido :"",
    edad : 0
};

const manejador = {
    set(objeto,propiedades,valor) {
        if(Object.keys(objeto).indexOf(propiedades) === -1) {
            return console.error(`La propiedad ${propiedades} no existe en el objeto persona`);
        }
        if(propiedades === "apellido" || propiedades === "nombre") {
            if (/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)){
                objeto[propiedades] = valor;    
            }
        } else {
            objeto[propiedades] = valor;
        }
        
    },
};

const juan = new Proxy(persona,manejador);

juan.nombre = "Juan";
juan.apellido = "Pérez";
juan.edad = 35;

console.log(juan);

juan.twitter = "@juanperez";

console.log(juan);
console.log(persona);

juan.apellido = "Pérez4";

console.log(juan);
console.log(persona);
