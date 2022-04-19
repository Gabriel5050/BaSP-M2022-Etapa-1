//console.log(´--EXERCISE 2: Strings´)

/*
    a.create a varieble string type with at least 10 caracters
    and convert the hole text in upper case
*/
console.log('-exercise 2.a');

var textUpperCase = 'Upper Case please';
console.log(textUpperCase.toUpperCase());

/*
    b.Crear una variable de tipo string con al menos 10 caracteres y 
    generar un nuevo string con los primeros 5 caracteres guardando
    el resultado en una nueva variable (utilizar substring).
*/
console.log('-exercise 2.b');

var string = 'ok lets use substring';
var stringsub = string.substring(0,5);
console.log (stringsub);

/*
    c.Crear una variable de tipo string con al menos 10 caracteres
    y generar un nuevo string con los últimos 3 caracteres guardando
    el resultado en una nueva variable (utilizar substring).
*/
console.log('-exercise 2.c');

var string = 'ok lets use substring';
var stringslast = string.substring(string.length-3,string.length);
console.log (stringslast)

/*
    d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
    string con la primera letra en mayúscula y las demás en minúscula. Guardar el
    resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase
    y el operador +).
*/
console.log('-exercise 2.d');

var string = 'uPPER cASE tEXT';
var string2d = string.substring(0,1).toUpperCase() + string.substring(1,string.length).toLowerCase();
console.log(string2d);

/*
    e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio
    en blanco. Encontrar la posición del primer espacio en blanco y guardarla en
    una variable (utilizar indexOf).
*/
console.log('-exercise 2.e');

var stringblank = 'blank space';
var string2e = stringblank.indexOf(' ');
console.log(string2e + 1);
/* cuando es acerca de la posicion no se si agregarle (+1)
    porque el espacio en blanco esta en la 6ta posicion
*/

/*
    f.Crear una variable de tipo string con al menos 2 palabras
    largas (10 caracteres y algún espacio entre medio). Utilizar
    los métodos de los ejercicios anteriores para generar
    un nuevo string que tenga la primera letra de ambas palabras
    en mayúscula y las demás letras en minúscula (utilizar indexOf,
    substring, toUpperCase, toLowerCase y el operador +).
*/
console.log('-exercise 2.f');

var sentence ='bomberos murciélago';
var capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
var capitalizeWords = (str) => str.split(' ').map(capitalizeString).join(' ');
console.log(capitalizeWords(sentence));

// no logre hacerlo segun la problematica =,(