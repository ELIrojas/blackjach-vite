/**
 * 
 * @param {Array <String>} deck arrglo de string
 * @returns {String} retorna la carta de deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
 