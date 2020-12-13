let arrayNotas = [9, 9 ,6];
let arrayNumeros = [2,3,4,5,6,7,8,9,10];
let arrayPessoas = [
    {
        nome: "Guilherme",
        idade: 27,
        telefone: 23345,
        profissao: "Programador"
    },
    {
        nome: "Maria",
        idade: 18,
        telefone: 22334,
        profissao: "Estudande",
    },
    {
        nome: "Joao",
        idade: 30,
        telefone: 22211,
        profissao: "Empresario",
    },
    {
        nome: "Paulo",
        idade: 16,
        telefone: 12345,
        profissao: "Estudande",
    },
    {
        nome: "Ana",
        idade: 27,
        telefone: 54312,
        profissao: "Programador",
    },
]

window.onload = function(){
    exercicio1();
    exercicio2();
    exercicio3();
    exercicio4();
    exercicio5();
    exercicio6();
    exercicio7();
    exercicio8();
    //exercicio9();
    //exercicio10();
    //exercicio11();
    //exercicio12();
    //exercicio13();
    //exercicio14();
    //exercicio15();
    //exercicio16();
    //exercicio17();
    }

//Exercicio 4 - 1
function exercicio1() {
    let Media = 0;
    let nElement = 0;
    arrayNotas.forEach(element => {
        nElement++;
        Media += element;
    });
    console.log("Exercicio 1 - Media", (Media/nElement));
}
//Exercicio 4 - 2
function exercicio2() {
    const mapa = arrayNumeros.map(x => x * x);
    console.log("Exercicio 2 - Novo Array: ", mapa);
}
//Exercicio 4 - 3
function exercicio3() {
    let resultado = arrayPessoas.some(pessoa => pessoa.idade >= 18);
    console.log("Exercicio 3 - Idade: ", resultado)
}
//Exercicio 4 - 4
function exercicio4() {
    let resultado = arrayPessoas.every(pessoa => pessoa.profissao === "Programador");
    console.log("Exercicio 4 - Profissao: ", resultado)
}
//Exercicio 4 - 5
function exercicio5() {
    const pessoasMap = arrayPessoas.map(pessoa => pessoa.nome);
    console.log("Exercicio 5 - Pessoas: ", pessoasMap)
}
//Exercicio 4 - 6
function exercicio6() {
    const pessoasIdadeMap = arrayPessoas.filter(pessoa => pessoa.idade < 18);
    console.log("Exercicio 6 - Pessoas: ", pessoasIdadeMap)
}
//Exercicio 4 - 7
function exercicio7() {
    const pessoaIdade = arrayPessoas.find(pessoa => pessoa.idade > 18);
    console.log("Exercicio 7 - Pessoas: ", pessoaIdade)
}
//Exercicio 4 - 8
function exercicio8() {
    const resultadoMult = arrayNumeros.reduce((acumular, valorInicial) => acumular * valorInicial);
    console.log("Exercicio 8 - Resultado da Multiplicacao: ", resultadoMult);
}
//Exercicio 4 - 9
//Exercicio 4 - 10
//Exercicio 4 - 11
//Exercicio 4 - 12
//Exercicio 4 - 13
//Exercicio 4 - 14
//Exercicio 4 - 15
//Exercicio 4 - 16
//Exercicio 4 - 17