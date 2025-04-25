import fs from 'fs';

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    try {
        return fs.readFileSync(ruta, 'utf-8');

    } catch (error) {

        throw new Error('error al leer el archivo: ' + error.message);

    }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 * @param {boolean} shouldCreateIfNotExists indica si se debe crear el archivo si no existe
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {

    try {
        const file = fs.existsSync(ruta);
        if (file || shouldCreateIfNotExists) {
            fs.writeFileSync(ruta, texto);

        } else {
            throw new Error('el archivo  no existe');
        }

    } catch (error) {
        throw new Error(`Error al escribir el archivo: ${error.message}`);

    }
}

// exportar ambas funciones
export { leerArchivoComoString, escribirTextoEnArchivo };