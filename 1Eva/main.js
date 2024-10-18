/* *********************************
EJERCICIO 2. CREA EL CONTROLADOR DE LA PÁGINA. DEBERÁ PODER CAMBIAR LA COLUMNA DE LA IZQUIERDA PARA QUE MUESTRE LOS DATOS SOLICITADOS Y EN LA COLUMNA DE LA DERECHA LA IMAGEN QUE CORRESPONDE.
EN CONCRETO, HAY QUE MOSTRAR UNA LISTA DE PRÉSTAMOS Y UNA LISTA DE SOCIOS
************************************ */
import { listaPrestamos, listaSocios, imgPrestamos, imgSocios } from "./funciones.js";

// EJERCICIO 2.1 Importar las funciones correspondientes



// EJERCICIO 2.2 Crear las funciones de control de contenidos
//      * Una función (o dos) que solicitará el listado formateado de préstamos/de socios y el nombre de la imagen correspondiente
//      * Luego colocará el listado en el bloque de la izquierda sustituyendo lo que allí aparezca
//      * Para terminar, colocará la imagen en la columna de la derecha
function listadoPrestamos() {
   const lugar = document.getElementById('texto');
   lugar.innerHTML = ' ';
   lugar.appendChild(listaPrestamos());
   

   const img = document.getElementById('imagen');
   img.innerHTML = ' ';
   img.appendChild(imgPrestamos());
}

function listadoSocios() {
    
    const lugar = document.getElementById('texto');
    lugar.innerHTML = ' ';
    lugar.appendChild(listaSocios());

   const img = document.getElementById('imagen');
   img.innerHTML = ' ';
   img.appendChild(imgSocios());
}

// EJERCICIO 2.3 Enlazar las funciones del módulo main con las funciones del objeto window

window.verListaPrestamos = listadoPrestamos;
window.verSocios = listadoSocios;