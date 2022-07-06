// Codigo del cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado);

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado);

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado mide: " + areaCuadrado);

function perimetroCuadrado(lado){
  return lado * 4;
}

function areaCuadrado(lado){
  return lado * lado;
}

console.groupEnd();


//Codigo del triangulo

console.group("Triangulo");

/*const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 5;
const alturaTriangulo = 5;
const perimetroTriangulo = baseTriangulo + ladoTriangulo1 + ladoTriangulo2;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(
  "Los lados del triangulo miden: " 
 + ladoTriangulo1 
 + "cm, " 
 + ladoTriangulo2 
 + "cm, " 
 + baseTriangulo 
 + "cm"
);

console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

console.log("El area del triangulo es de: " + areaTriangulo + "cm");*/

function perimetroTriangulo(lado1, lado2, baseTriangulo){
  return lado1 + lado2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo){
  return (baseTriangulo * alturaTriangulo) / 2;
}

console.groupEnd();

// Circulo 

console.group("Circulo");

/*const radioCirculo = 5;
const pi = Math.PI;
const diametroCirculo = radioCirculo * 2;
const areaCirculo = pi * (radioCirculo * radioCirculo);
const perimetroCirculo = pi * diametroCirculo;

console.log("El radio del circulo es de: " + radioCirculo + " cm");
console.log("El area del circulo es de: " + areaCirculo + " cm");
console.log("El perimetro del circulo es de: " + perimetroCirculo + " cm");*/

const PI = Math.PI;

function diametroCirculo(radio){
  return radio * 2;
}

function areaCirculo(radio){
  return PI * (radio * radio);
}

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return PI * diametro;
}

console.groupEnd();

//Aqui interactiamos con HTML

//Cuadrado

function calcularPerimetroCuadrado(){
const input = document.getElementById("inputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area =areaCuadrado(value);
  alert(area);
}

//Triangulo

function calcularAreaTriangulo(){
  const imput = document.getElementById("")
}

//Circulo 

function calcularAreaCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert(area);
}

function calcularPerimetroCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

