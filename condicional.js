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

import { assert } from "./utils.js";

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

// TESTS

assert( esPotenciaDe(8, 2)      === true  , 'esPotenciaDe(8, 2)     debería ser TRUE');    
assert( esPotenciaDe(256, 2)    === true  , 'esPotenciaDe(256, 2)  debería ser TRUE');    
assert( esPotenciaDe(9, 2)      === false , 'esPotenciaDe(9, 2)     debería ser FALSE');   
assert( esPotenciaDe(19, 2)     === false , 'esPotenciaDe(19, 2)    debería ser FALSE');   
assert( esPotenciaDe(-23, 2)    === false , 'esPotenciaDe(-23, 2)   debería ser FALSE');   
assert( esPotenciaDe(-4, 2)     === false , 'esPotenciaDe(-4, 2)    debería ser FALSE');   