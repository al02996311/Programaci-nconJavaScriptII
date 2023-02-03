class Pelicula {

    static listaGeneros = [
        "Acción",
        "Adultos",
        "Animación", 
        "Autobiografía", 
        "Aventura", 
        "Ciencia ficción",
        "Cine negro", 
        "Comedia", 
        "Concursos de televisión", 
        "Crimen",
        "Deportes", 
        "Documental", 
        "Drama", 
        "Familiar", 
        "Fantasía", 
        "Guerra", 
        "Historia", 
        "Musicales", 
        "Misterio", 
        "Noticias", 
        "Películas de vaqueros", 
        "Programa de entrevistas",
        "Reality shows", 
        "Romance", 
        "Suspenso", 
        "Terror"
    ];

    constructor (id,titulo,director,estreno,pais,generos,calificacion) {
        this.id             = this.validarIMDB(id)?id:'Error';
        this.titulo         = this.validarTitulo(titulo)?titulo:'Error';
        this.director       = this.validarDirector(director)?director:'Error';
        this.estreno        = this.validarEstreno(estreno)?estreno:'Error';
        this.pais           = this.validarPais(pais)?pais:'Error';
        this.generos        = this.validarGeneros(generos)?generos:'Error';
        this.calificacion   = this.validarCalificacion(calificacion)?calificacion:'Error';

        //this.validarIMDB(this.id);
        //this.validarTitulo(this.titulo);
        //this.validarDirector(this.director);
        //this.validarEstreno(this.estreno);
        //this.validarPais(this.pais);
        //this.validarCalificacion(this.calificacion);
        //this.fichaTecnica();
    }

    validarCadena (propiedad,valor) {
        if (valor === null) {
            console.warn(`${propiedad} “${valor}” está vacío`);
            return false;
        } else if (typeof valor !== "string") {
            console.error(`${propiedad} “${valor}” ingresado no es una cadena de texto`);
            return false;
        } else {
            return true;
        }
    }

    validarIMDB (id) {
        let expreg = new RegExp("^([a-z]){2}([0-9]){7}$");
        if(this.validarCadena("id",id)){
            if (!(expreg.test(id))) {
                console.log(`IMBD id ${id} no es válido, debe tener nueve caracteres, los dos primeros deben ser letras minúsculas y los siete restantes números`);
                return false;
            }
        } else {
            return false;
        }

        return true;
    }

    validarLongitudCadena (propiedad,valor,longitud) {
        if(this.validarCadena(propiedad,valor)) {
            if(valor.length > longitud) {
                console.log(`${propiedad} “${valor}” excede el número de caracteres permitidos (${longitud})`);
                return false;
            } 
        } else {
            return false;
        }
        return true;
    }

    validarTitulo (titulo) {
        if(this.validarCadena("titulo",titulo)) {
            if(this.validarLongitudCadena("titulo",titulo,100)) {
                return true;
            } else {
                console.error(`El titulo ${titulo} tiene mas caracteres de los permitidos`);
                return false;
            }

        } else {
            return false;
        }

        return true;
    }

    validarDirector (director) {
        if(this.validarCadena("director", director)) {
            if(this.validarLongitudCadena("director", director,50)) {
                return true;
            } else {
                console.error(`El director ${director} tiene mas caracteres de los permitidos`);
                return false;
            }
        } else {
            return false;
        }

        return true;
    }

    validarNumero(propiedad,valor) {
        
        if(valor.length === 0) {
            console.warn(`${propiedad} “${valor}” está vacío`);
            return false;
        } else if (typeof valor !== "number") {
            console.error(`${propiedad} “${valor}” ingresado no es un número`);
            return false;
        } else {
            return true;
        }
        return true;
    }

    validarEstreno(estreno) {
        let regexp = new RegExp("^[0-9]{4}$");
        if(this.validarNumero("Año de estreno",estreno)) {
            if(!regexp.test(estreno)) {
                console.error(`Año de estreno “${estreno}” no es válido, debe ser un número de 4 dígitos`);
                return false;
            } else {
                return true;
            }
        }
        return true;
    }

    validarArreglo (propiedad,valor) {
        if (valor.length === 0) {
            console.warn(`${propiedad} “${valor}” está vacío`);
            return false;
        } else if (!Array.isArray(valor)) {
            console.error(`${propiedad} “${valor}” ingresado no es un arreglo`);    
            return false;
        } else if (valor.length === 0) {
            console.error(`${propiedad} “${valor}” el arrgelo no tiene valores`);
            return false;
        } else {
            for (const val of valor) {
                if (!this.validarCadena(propiedad,val)) {
                    return false;
                }
            }
            return true;
        }
        return true;
    }

    validarPais (pais) {
        
        return this.validarArreglo("pais",pais);
                
    }

    static generosAceptados () {
        console.info(`Los géneros aceptados son ${Pelicula.listaGeneros.join(",")}`);
        
    }

    validarGeneros (generos) {
        if(this.validarArreglo("generos",generos)) {
            for (const genero of generos) {
                if(!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Los generos no son aceptados, generos originales ${generos.join(",")}`);
                    Pelicula.generosAceptados();

                }
            }
        } else {
            return false;
        }
        return true;
    }

    validarCalificacion (calificacion) {
        if(this.validarNumero("calificacion",calificacion)) {
            if(calificacion < 0 || calificacion > 10) {
                console.error(`La calificacion no es valida ${calificacion}, este debe de ser un numero estre 0 y 10`);
            } else {
                calificacion = calificacion.toFixed(1);
            }
        } else {
            return false;
        }
        return true;
    }

    fichaTecnica () {
        console.info(`Ficha tecnica : \n\n`);
        for(let tmpKey in this) {
            console.info(`${tmpKey} : ${this[tmpKey]}`);
        }
    }
}

const peli = new Pelicula("tt1630029",
"Avatar: The Way of Water",
"James Cameron",
2023,
["Estados Unidos"],
["Acción","Aventura","Fantasía","Ciencia ficción"],
7.84856);

//peli.validarCadena("actores",null);
//peli.validarCadena("musica",2);
//peli.validarLongitudCadena("titulo",peli.titulo,2);
//peli.validarLongitudCadena("titulo",peli.titulo,50);
//peli.validarTitulo(peli.titulo);
//peli.validarTitulo("peli.titulo000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
//peli.validarEstreno(peli.estreno);
//peli.validarEstreno(202323);
//peli.validarArreglo("pais",null);
//peli.validarArreglo("pais",["test"]);
//peli.validarArreglo("pais",["test",25]);
//peli.validarPais(["test",122]);
//Pelicula.generosAceptados();
//peli.validarGeneros(["hola"]);
//peli.validarGeneros(["Terror"]);
//peli.validarGeneros(peli.generos);
//peli.validarCalificacion("20");
//peli.validarNumero("calificacion",20);
//peli.validarNumero("calificacion",peli.calificacion);
//peli.validarCalificacion(peli.calificacion);
//console.log(typeof peli.calificacion);
//peli.fichaTecnica();

const peliculasArray = [
    {
    id :            "tt1630029",
    titulo:         "Avatar: The Way of Water",
    director:       "James Cameron",
    estreno:        2023,
    pais:           ["Estados Unidos"],
    generos:        ["Acción","Aventura","Fantasía","Ciencia ficción"],
    calificacion:   7.84856
    },
    {
    id :            "tt3915174",
    titulo:         "El gato con botas: El último deseo",
    director:       "Joel Crawford",
    estreno:        2022,
    pais:           ["Estados Unidos","Japon"],
    generos:        ["Animación","Aventura","Comedia","Familiar","Fantasía","Misterio","Romance"],
    calificacion:   7.9
    },
    {
    id :            "tt12844910",
    titulo:         "Pathaan",
    director:       "Siddharth Anand",
    estreno:        2023,
    pais:           ["India"],
    generos:        ["Acción","Drama","Suspense"],
    calificacion:   6.9
}
];

peliculasArray.forEach(element => {
    let pelicula = new Pelicula(element['id'],element['titulo'],element['director'],element['estreno'],element['pais'],element['generos'],element['calificacion']);
    pelicula.fichaTecnica();
});