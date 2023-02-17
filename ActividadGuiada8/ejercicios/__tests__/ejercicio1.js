//Ejercicio1

describe('Ejericio 1', () => {
    test('Pruebas', () => {
        const value = 2+2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(5.5);

        expect(value).toBe(4);
        expect(value).toEqual(4);

        expect(String(value)).not.toMatch(/a/);
        expect(String(value)).toMatch(/4/);

    });
});