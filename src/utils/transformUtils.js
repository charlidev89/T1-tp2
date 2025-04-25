/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    const numeros = [];
    const parts = str.split(separador);

    for (const part of parts) {           // aca recorremos el array de strings 
        const num = Number(part.trim());           // convertimos ese elemento en esa posicion del array de string a numero

        if (!isNaN(num)) {                     // si esun numero se agrega al array de numeros
            numeros.push(num)
        }

    }

    return numeros;


}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    return arr.join(separador);
}

// exportar ambas funciones
export { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString };