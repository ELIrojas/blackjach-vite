// import { pedirCarta,valorCarta } from "./";
 /**
  * 
  * @param {String} carta 
  * @returns {HTMLImageElement} imaen de retorno
  */
export const crearCartaHTML= (carta)=>{
    //validacion
    if(!carta) throw new Error('La carta es argumento obligatorio');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}