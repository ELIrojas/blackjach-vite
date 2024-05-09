// import { shuffle } from 'underscore';

import _ from 'underscore';

/**esta funcion crea un nueva varaja
 * 
 * @param {Array <String>} tiposDeCarta Ejemplo:['C','D','H','S'];
 * @param {Array <String>} tiposEspeciales Ejemplo:['A','J','Q','K'];
 * @returns {Array <String>} retorna un arreglo
 */

export const crearDeck = (tiposDeCarta,tiposEspeciales) => {
//validaciones 
if(!tiposDeCarta || tiposDeCarta.length === 0) 
    throw new Error('Tipos es obligatorio Como un arreglo en string');

if(!tiposEspeciales || tiposEspeciales.length === 0) 
    throw new Error('Tipos es obligatorio Como un arreglo en string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
};