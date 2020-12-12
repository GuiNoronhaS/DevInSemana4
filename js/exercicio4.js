let arrayNotas = [9, 9 ,6];
let arrayNumeros = [2,3,4,5,6,7,8,9,10];

//Exercicio 4 - 1
function calcularMedia() {
    let Media = 0;
    let nElement = 0;
    arrayNotas.forEach(element => {
        nElement++;
        Media += element;
    });
    console.log("Media", (Media/nElement));
}
//Exercicio 4 - 2
function calcularQuadrado() {
    const mapa = arrayNumeros.map(x => x * x);
    console.log("Novo Array: ", mapa);
}

//Exercicio 4 - 3
//Exercicio 4 - 4
//Exercicio 4 - 5
//Exercicio 4 - 6
//Exercicio 4 - 7
//Exercicio 4 - 8
//Exercicio 4 - 9
//Exercicio 4 - 10
//Exercicio 4 - 11
//Exercicio 4 - 12
//Exercicio 4 - 13
//Exercicio 4 - 14
//Exercicio 4 - 15
//Exercicio 4 - 16
//Exercicio 4 - 17