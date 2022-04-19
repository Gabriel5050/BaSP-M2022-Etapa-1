console.log('--EXERCISE 6 : ');

/*
    a.Crear una función suma que reciba dos valores numéricos y
    retorne el resultado. Ejecutar la función y guardar el 
    resultado en una variable, mostrando el valor de dicha 
    variable en la consola del navegador.
*/

console.log ('-exercise 6.a');

function addition(numberA,numberB) {
    return numberA + numberB;
}
var answerAddition = addition(7,6);
console.log(answerAddition);

/*
    b.A la función suma anterior, agregarle una validación 
    para controlar si alguno de los parámetros no es un número, 
    mostrar una alerta aclarando que uno de los parámetros tiene 
    error y retornar el valor NaN como resultado.
*/

console.log ('-exercise 6.b');

function addition(numberA,numberB) {
    if (typeof(numberA) != 'number' || typeof(numberB) != 'number'){
        alert('one or both parameter/s is wrong');
        return NaN;
    }
    return numberA + numberB;
}
var answerAddition = addition(1,2);
var addition1 = addition('a',2);
console.log(answerAddition);
console.log(addition1);


/*
    c.Crear una función validate integer que reciba un número como 
    parámetro y devuelva verdadero si es un número entero.
*/
//¿hacer que reciba numeros random?
console.log ('-exercise 6.c');

function validateInteger (number){
    return number === Math.floor(number);
  }
  
var int = validateInteger(36);
var notIntegrer = validateInteger(3.14);
console.log(int); 
console.log(notIntegrer); 

/*
    d.A la función suma del ejercicio 6b) agregarle una llamada que 
    valide que los números sean enteros. En caso que haya decimales 
    mostrar un alerta con el error y retorna el número convertido a 
    entero (redondeado).
*/

console.log ('-exercise 6.d');

function addition(numberA, numberB) {
  
    if (typeof(numberA) != 'number' || typeof(numberB) != 'number') {
      alert('One/both parameter/s is not correct'); 
      return NaN;
    } 
    if (!validateInteger(numberA)) {
      alert('A parameter is not an integer');
      numberA = Math.floor(numberA);
    }
    if (!validateInteger(numberB)) {
      alert('B parameter is not an integer');
      numberB = Math.floor(numberB);
    }
    return numberA + numberB;
  }
  
  var answerAddition = addition(2,2);
  var addition1 = addition(64, '@');
  var addition2 = addition(22,1.4);
  var addition3 = addition(3.33, 3.32);
  console.log(answerAddition); 
  console.log(addition1);
  console.log(addition2);
  console.log(addition3);
  // ¿redondea mal?(aun dando como resultado un numero mayor a su sumatoria)

/*
    e.Convertir la validación del ejercicio 6d) en una función separada y 
    llamarla dentro de la función suma probando que todo siga funcionando igual.
*/
//¿que?
console.log ('-exercise 6.e');
