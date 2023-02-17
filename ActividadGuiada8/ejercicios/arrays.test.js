var {estados, dias} = require('./arrays');

test('Revisamos el contenido de los arreglos', () => {
    expect(estados).toContain('Nuevo León');
    expect(new Set(estados)).toContain('Nuevo León');

    expect(dias).toContain('Martes');
    expect(new Set(dias)).toContain('Martes');

});

/*
a) Explica la prueba realizada al arreglo “estados”.
R.- Valida que el estado "Nuevo León" se encuentre en el arreglo "estados"
b) ¿Cuál es la prueba que pretende hacer al incluir new Set(estados)
R.- Valida que el estado "Nuevo León" se encuentre en el conjunto "estados"
*/