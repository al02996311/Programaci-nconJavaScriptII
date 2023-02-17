const lenguajepagina = require ('./lenguaje');

test('Revisamos el valor de retorno del lenguaje seleccionado',() => {
    //expect(lenguajepagina('es-ES')).toBe('/about-us');
    expect(lenguajepagina('es-ES')).not.toBe('/about-us');
    
    expect(lenguajepagina('en-US')).toBe('/about-us');
    expect(lenguajepagina('es-ES')).toBe('/acerca-de-nosotros');
    expect(lenguajepagina('fr-FR')).toBe('/a-propos-denous');
    expect(lenguajepagina('')).toBe('');
});