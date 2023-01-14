import { assert } from "./testsUtils.js";
import { esPotenciaDe } from "./condicional.js";

// TESTS

export const tests_esPotenciaDe = [
    assert( esPotenciaDe(8, 2)      === true  , 'esPotenciaDe(8, 2)     debería ser TRUE'),
    assert( esPotenciaDe(256, 2)    === true  , 'esPotenciaDe(256, 2)   debería ser TRUE'),
    assert( esPotenciaDe(9, 2)      === false , 'esPotenciaDe(9, 2)     debería ser FALSE'),   
    assert( esPotenciaDe(19, 2)     === false , 'esPotenciaDe(19, 2)    debería ser FALSE'),   
    assert( esPotenciaDe(-23, 2)    === false , 'esPotenciaDe(-23, 2)   debería ser FALSE'),   
    assert( esPotenciaDe(-4, 2)     === false , 'esPotenciaDe(-4, 2)    debería ser FALSE')   
];


