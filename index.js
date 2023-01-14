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

import { formatTests } from "./testsUtils.js";
import { esPotenciaDe } from "./condicional.js";
import { tests_esPotenciaDe } from "./condicional.tests.js";

const testsOutputElement = document.querySelector('.tests-output');
const testsButton = document.querySelector('[tests-button]');


testsButton.addEventListener("click", () => {
    testsOutputElement.innerHTML = formatTests(tests_esPotenciaDe);
})