const objectMapping = {
    ACTIVO: 'Activo',
    INACTIVO: 'Inactivo',
    OBSOLETO: 'Obsoleto'
};

function getObjectDescription(tipo) {
    if(!tipo) {
        return 'El parámetro \'tipo\' no existe';
    } 

    return objectMapping[tipo];
}

module.exports = getObjectDescription;