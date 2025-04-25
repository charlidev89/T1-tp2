import { leerArchivoComoString, escribirTextoEnArchivo } from './src/utils/fileUtils.js';
import { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } from './src/utils/transformUtils.js';
import { combinarDosArrays, combinarNArrays } from './src/apareo.js';



// leo los 4 archivos a memoria y sino existe los crea
escribirTextoEnArchivo('./numeros1.txt', '1 | 5 | 10', true);
escribirTextoEnArchivo('./numeros2.txt', '2 | 3 | 8 | 11', true);
escribirTextoEnArchivo('./numeros3.txt', '4', true);
escribirTextoEnArchivo('./numeros4.txt', '6 | 7 | 13', true);

// Leer los 4 archivos a memoria
console.log("\nLeyendo archivos...");
const contenido1 = leerArchivoComoString('./numeros1.txt');
const contenido2 = leerArchivoComoString('./numeros2.txt');
const contenido3 = leerArchivoComoString('./numeros3.txt');
const contenido4 = leerArchivoComoString('./numeros4.txt');

console.log("Contenido de numeros1.txt:", contenido1);
console.log("Contenido de numeros2.txt:", contenido2);
console.log("Contenido de numeros3.txt:", contenido3);
console.log("Contenido de numeros4.txt:", contenido4);

// Preparar los 4 arrays a partir de los archivo leídos
console.log("\nTransformando contenido a arrays de números...");
const array1 = transformarStringEnArrayDeNumeros(contenido1, ' | ');
const array2 = transformarStringEnArrayDeNumeros(contenido2, ' | ');
const array3 = transformarStringEnArrayDeNumeros(contenido3, ' | ');
const array4 = transformarStringEnArrayDeNumeros(contenido4, ' | ');

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array 3:", array3);
console.log("Array 4:", array4);

// Combino los primeros dos arrays

console.log("\nCombinando los dos primeros arrays...");
const combinacionDosArrays = combinarDosArrays(array1, array2);
console.log("Resultado de combinar array1 y array2:", combinacionDosArrays);

// Combino los cuatro arrays
console.log("\nCombinando los cuatro arrays...");
const combinacionCuatroArrays = combinarNArrays([array1, array2, array3, array4]);
console.log("Resultado de combinar los cuatro arrays:", combinacionCuatroArrays);

// Transformar array combinado a string
console.log("\nTransformando resultado a string...");
const resultadoFinal = transformarArrayDeNumerosAUnSoloString(combinacionCuatroArrays, ',');
console.log("Resultado final como string:", resultadoFinal);

// Guardar el resultado en un archivo
console.log("\nGuardando resultado en archivo...");
escribirTextoEnArchivo('./resultado.txt', resultadoFinal, true);
console.log("Resultado guardado en archivo resultado.txt");

console.log("\nTodas las pruebas completadas con éxito.");
