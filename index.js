// Tipos de datos primitivos 
// Numeros
// 1, 2, 3, -3, 2.4
// Strings --> cadenas de texto
// "Un texto"
// Booleano
// true, false 
// undefined 

// Operadores
// aritmeticos
// 2 + 2, 2 -2
// // concatenacion
// "Un string" + "Otro string"
// // comparacion
// 2 > 3, 2 < 3

// let nombreDeLaProfe = "Malena"
// const decirNombreCompleto = (nombre, apellido) => {
//   return nombre + " " + apellido
// }
// console.log( decirNombreCompleto(nombreDeLaProfe, "rey") )
// let resultadoDeLaFuncion = decirNombreCompleto("malena", "rey")


// 6. gritar(str)
// Crear una función gritar que tome como argumento un string 
// y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// gritar('hola') // ¡hola!
// gritar('aaaaaa') // ¡aaaaaa!

// const gritar = (str) => {
//   return `¡${str}!`
// }

// console.log(gritar("Malena"))
// console.log(gritar("Carolina Krstulovich"))


// let gritar = (palabra1) => {
//  return "¡" + palabra1 + "!";
// }
// console.log(gritar("hola"))
// console.log(gritar("aaaaaaa"))

// 7. obtenerNombreCompleto(nombre, apellido)
// Crear una función obtenerNombreCompleto que tome como 
// argumento un nombre y un apellido y devuelva un string con 
// la unión de ambos valores

// const obtenerNombreCompleto = (nombre, apellido) => {
//   return `${nombre} ${apellido}`
// }

// console.log(obtenerNombreCompleto('Ada', 'Lovelace'))
// console.log(obtenerNombreCompleto('Ana', 'Esposito'))
// console.log(obtenerNombreCompleto('Caro', 'Kartu'))


// 8. saludar(nombre)
// Crear una función saludar que tome como argumentos 
// un nombre y devuelva un saludo que lo incluya.

// const saludar = (nombre) => {
//   return `Hola ${nombre}, un gusto conocerte`
// }

// console.log(saludar('Ada'))
// console.log(saludar('Elsa, la delatadora sorpresa'))

// 9. saludarGritando(nombre, apellido)
// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), 
// crear una función saludarGritando que tome como argumentos un nombre y 
// un apellido y devuelva un saludo con signos de exclamación.

// const saludarGritando = (nombre, apellido) => {
//   let nombreCompleto = obtenerNombreCompleto(nombre, apellido)
//   let saludo = saludar(nombreCompleto)
//   let grito = gritar(saludo)
//   return grito
// }


// 19. calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el puntaje de un 
// examen que consiste en ejercicios de distinto nivel. 
// Debe tomar como argumento tres numeros que consisten 
// en la cantidad de ejercicios resueltos en cada nivel y devolver 
// un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

// const calcularPuntaje = (facil, normal, dificil) => {

//   const totalFaciles = facil * 3
//   const totalNormales = normal * 5
//   const totalDificiles = dificil * 10

//   return totalDificiles + totalNormales + totalFaciles
// }

// console.log(calcularPuntaje(3, 0, 0)) // 9
// console.log(calcularPuntaje(0, 2, 1)) // 20
// console.log(calcularPuntaje(5, 1, 2)) // 40


// Operadores relacionales 
// console.log(5 > 4) // true
// console.log(5 < 4) // false
// console.log(5 > 5) // false 
// console.log (5 < 5) // false 
// console.log( 5 <= 5 ) // true
// console.log( 5 >= 5 ) // true

// Operadores de igualdad

// igualdad no-estricta 
// compara por valor, pero no se fija el tipo de dato
// let edad = 5 
// let edadComoString = "5"

// console.log( 5 == 5)  // true
// console.log("5" == 5) // true 
// console.log( edad == 5) // true
// console.log( edadComoString == 5)  // true 

// // igualdad estricta 
// // compara por valor y tipo de dato a la vez 
// console.log( 5 === 5 ) // true
// console.log("5" === 5) // false 
// console.log( edad === 5) // true 
// console.log( edadComoString === 5) // false 

// // operadores "desigualdad"

// // desigualdad no-estricta 
// console.log( 5 != 5 ) //false 
// console.log( "5" != 5) //false 

// // desigualdad estricta 
// console.log(5 !== 5) // false
// console.log(5 !== "5") // true


// Club de los No-Homeros 

// let nombreUsuario = prompt("Decime tu nombre") // Elsa 
// nombreUsuario === "Homero" --> false --> te dejo entrar a mi pagina
// nombreUsuario !== "Homero" --> true --> te dejo entrar a mi pagina 


// valores falsy  --> coercionan a false 
// 0 
// -0
// ""
// undefined 
// NaN 

// valores truthy --> coercionan a true 
// "Un string con contenido"
// 5
// -5 


// Estructuras Condicionales

// sentencia If 

// club de los no homeros
// let nombreUsuario = prompt("Decime tu nombre")

// // "homero" !== "Homero"

// if (nombreUsuario == "Homero") {
//   alert("Vos no podes entrar")
// }
// else {
//   alert("Bienvenido al club")
// }


let edadUsuario = prompt("Decime tu edad")

if (edadUsuario >= 18) {
  alert("Bienvenido")
}
else {
  alert("Banca unos años")
}




