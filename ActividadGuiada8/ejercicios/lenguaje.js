const idiomaIngles = "en-US";
const idiomaEspanol = "es-ES";
const idiomaFrances = "fr-FR";

function lenguajepagina(lenguaje) {
    switch (lenguaje.toLowerCase()) {
        case idiomaIngles.toLocaleLowerCase():
            return '/about-us';
        case idiomaEspanol.toLocaleLowerCase():
            return '/acerca-de-nosotros';
        case idiomaFrances.toLocaleLowerCase():
            return '/a-propos-denous';
    }
    return '';
}

module.exports = lenguajepagina;