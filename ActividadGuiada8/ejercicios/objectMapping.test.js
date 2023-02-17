const getObjectDescription = require ('./objectMapping');

test('Probando el object mapping', () => {
    expect(getObjectDescription('ACTIVO')).toBe('Activo');
    expect(getObjectDescription('INACTIVO')).toBe('Inactivo');
    expect(getObjectDescription('OBSOLETO')).toBe('Obsoleto');
    expect(getObjectDescription('ACTIVO')).not.toBe('');
    expect(getObjectDescription('INACTIVO')).not.toBe('');
    expect(getObjectDescription('OBSOLETO')).not.toBe('');
    expect(getObjectDescription('')).not.toBe('Activo');
    expect(getObjectDescription()).not.toBe('Activo');
    expect(getObjectDescription()).toBe("El parámetro \'tipo\' no existe");
});