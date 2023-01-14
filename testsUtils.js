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

export function assert(outcome, description) {
    var passFail = outcome ? 'pass' : 'fail';
    return { outcome: outcome, output: `${passFail}: ${description}` }
}

export function displayTests(tests, htmlElement) {
    let output = ``;
    tests.forEach(testResult => {
        output += `${testResult.output}\n`;
    });
    console.log(output);
}