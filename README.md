# Aribag technical test

A continuación te presentamos una serie de ejercicios cuyo propósito es evaluar tus
habilidades, conocimientos y capacidad de resolución de problemas. Tomaremos en cuenta
las metodologías utilizadas, lógica aplicada y buenas prácticas en general. Procura utilizar
una documentación concisa, eficiente y clara. Lee muy bien las instrucciones ya que
tomaremos mucho en cuenta los detalles.

Instrucciones:

● Debes resolver al menos 3 de los 5 ejercicios.
● Los ejercicios deben de estar en Javascript.
● Debes respetar el directorio de entrega y el nombre de la función (vienen
especificados en cada ejercicio).
● Los ejercicios se deben de subir a un mismo repositorio para su revisión.
● Cada ejercicio debe de trabajarse sobre una rama distinta. La entrega final debe de
ir sobre master / main donde esté el merge de todas las ramas.
● Documenta tu código.
● En caso de que no termines algún ejercicio pero si hayas avanzado, inclúyelo en la
entrega. Todo cuenta.
● Pregunta si tienes alguna duda.
● ¡Diviértete!

Fecha límite de entrega: sábado 17 de septiembre.


## Ejercicio 1

Directorio de entrega: ex01/
Nombre de la función: printCombinations

● Crea una función que imprima todas las combinaciones de tres dígitos distintos de
manera ascendente.
● Este es el output esperado:
● 020 no se encuentra ya que el dígito 0 se encuentra presente más de una vez.
● 021 no se encuentra gracias a que la combinación de los números ya existe en 012.

## Ejercicio 2

Directorio de entrega: ex02/
Nombre de la función: evalExpression

● Crea una función que tome una variable de tipo String como parámetro. Esta
variable corresponde a una expresión aritmética, por ejemplo:
“3 + 42 * (1 - 2 / (3 + 4) - 1 * 21) + 1”
● Esta expresión debe de ser calculada y regresar su valor.
● La variable como parámetro será siempre válida. Es decir, no te debes preocupar
por recibir letras, divisiones por cero, paréntesis mal colocados, etc.
● Se debe de tener soporte para las siguientes operaciones:
○ + para sumar.
○ - para restar.
○ / para dividir.
○ * para multiplicar.
● Tip: ya existe un algoritmo que te ayudará a resolver este ejercicio.

## Ejercicio 3
Directorio de entrega: ex03/
Nombre de la función: clearDuplicates

● Crea una función que reciba como parámetro un arreglo de números.
● La función debe de quitar los números que se repiten. Por ejemplo:

Input: [4, 3, 4, 3, 1, 7, 8, 8]
Output: [4, 3, 1, 7, 8]

## Ejercicio 4
Directorio de entrega: ex04/
Nombre de la función: blackjack
● Crea una función que calcule el valor de una mano de blackjack.
● Recibirás como parámetro un arreglo de Strings con las cartas. Ejemplo:
Input: [‘A’
,
‘2’
,
‘K’]

Output: 13
Cómo se calculan los puntos:
● Tu mano debe de tener el valor más alto posible sin exceder los 21 puntos.
● Las cartas 2,3,4,5,6,7,8,9 toman el valor que les corresponde (2 vale 2 puntos, 7
vale 7 puntos).
● Las cartas J,Q,K toman el valor de 10 puntos.
● El As tiene un valor de 1 u 11 puntos.
Ejemplos de manos:
● La mano 2,4 = 6
● La mano Q,8 = 18
● La mano A,4 = 15
● La mano A,K = 21
● La mano A,A,J = 12
● La mano A,A,8 = 20
● La mano 3,3,9,A,6 = 22

## Ejercicio 5

Directorio de entrega: ex05/
Nombre de la función: shiftCipher
● Crea una función que realice un cifrado César. Un cifrado César consiste en
desplazar todas las letras de una oración N lugares hacia la derecha.
Ejemplo, si N = 5 entonces:
○ a = f
○ b = g
○ c = h
○ x = c
○ hola = mtqf
● Debe de recibir como primer argumento una variable de tipo String (que es la que se
va a cifrar) y como segundo argumento un número que indica las posiciones de
desplazamiento.