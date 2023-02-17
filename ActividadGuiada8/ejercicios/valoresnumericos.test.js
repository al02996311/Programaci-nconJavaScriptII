const { suma , positivos, negativos, primos} = require ('./valoresnumericos');

describe('Pruebas ejercicio 6', () => {
    test('Suma', () => {
        expect(suma([1,2,3,4])).toBe(10);
    });

    test('Positivos', () => {
        expect(positivos([1,2,3,4])).toEqual([1, 2, 3, 4]);
    });


    test('Negativos', () => {
        expect(negativos([1,-2,3,-44])).toEqual([-2, -44]);
    });

    test('Primos', () => {
        expect(primos([1,2,3,4,5,6,7])).toEqual([2, 3, 5, 7]);
    });


});