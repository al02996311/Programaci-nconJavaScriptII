const sum=require('./suma')
test('Suma 1+2 es igual a 3',()=>{
    expect(sum(1,2)).toBe(3)
});

test('Probar dos mas dos',() => {
const value = 2+2;
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4.5);

expect(value).toBe(4);
expect(value).toEqual(4);
});

test('existe una a en la palabra Equipo', () => {
    expect('equipo').not.toMatch(/a/);
});

test('Aparece la plabra "stop" en el nombre Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});