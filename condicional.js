/* 

    Proyecto:   Pre-entrega 1 
                Matías Baldanza - matiasbaldanza@gmail.com
                Twitter: @matiasbaldanza
    Curso:      Javascript
    Comisión:   #34150 - CoderHouse
    Profesor:   Gonzalo Ledesma

    Repo:       https://github.com/matiasbaldanza/coderhouse-js-34150-matiasbaldanza-preentrega-1/
    Sitio:      https://matiasbaldanza.github.io/coderhouse-js-34150-matiasbaldanza-preentrega-1/

*/

export function esPotenciaDe(numero, potencia) {
    // caso base
    if (numero === 1) {
        return true;
    } else if ( numero % potencia === 0) {
        return esPotenciaDe(numero / potencia, potencia);
    } else {
        return false;
    }
}

