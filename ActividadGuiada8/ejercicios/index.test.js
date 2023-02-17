 var {sumar, restar, multiplicar, dividir} = require('./index');

 describe('Operaciones matemáticas', () => {

    test('Probamos la suma',()=>{
        expect(sumar(1,1)).toBe(2);
    });
    test('Probamos la resta' , () => {
        expect(restar(1,1)).toBe(0);
    });
    test('Probamos la miltiplicación' , () => {
        expect(multiplicar(1,3)).toBe(3);
    });
    test('Probamos la división' , () => {
        expect(dividir(4,2)).toBe(2);
    });
 });