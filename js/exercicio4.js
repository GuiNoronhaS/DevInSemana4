let arrayNotas = [9, 9, 6];
let arrayNumeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];
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
let objetoRetangulo = {
    altura: 10,
    largura: 5,
};
let arrayCidades = [
    {
        nome: "Florianópolis",
        estado: "SC"
    },
    {
        nome: "São Paulo",
        estado: "SP"
    },
    {
        nome: "Palhoça",
        estado: "SC"
    },
    {
        nome: "Belo Horizonte",
        estado: "MG"
    },
    {
        nome: "Biguaçu",
        estado: "SC"
    },
    {
        nome: "Porto Alegre",
        estado: "RS"
    },
]

window.onload = function () {
    exercicio1();
    exercicio2();
    exercicio3();
    exercicio4();
    exercicio5();
    exercicio6();
    exercicio7();
    exercicio8();
    exercicio9();
    exercicio10();
    exercicio11();
    exercicio12();
    exercicio13();
    exercicio14();
    exercicio15();
    exercicio16();
    exercicio17();
}

//Exercicio 4 - 1
function exercicio1() {
    let Media = 0;
    let nElement = 0;
    arrayNotas.forEach(element => {
        nElement++;
        Media += element;
    });
    console.log("Exercicio 1 - Media", (Media / nElement));
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
const apresentar = (nome, idade) => {
    console.log("Exercicio 9 - Ola, eu sou " + nome + " e tenho " + idade + " anos.");
};
function exercicio9() {
    for (let i = 0; i < arrayPessoas.length; i++) {
        apresentar(arrayPessoas[i].nome, arrayPessoas[i].idade)
    }
}
//Exercicio 4 - 10
function retornaPromise(valor1, valor2) {
    return new Promise((resolve, reject) => {
        let resultado = valor1 + valor2;
        if (resultado % 2 == 0) {
            resolve("Exercicio 10 - Resolvido - O valor é par: " + resultado);
        } else {
            reject("Exercicio 10 - Rejeitado - O valor é Impar!");
        }
    })
}
function exercicio10() {
    retornaPromise(2, 2).then(
        result => console.log(result),
        error => console.log(error)
    );
    retornaPromise(1, 2).then(
        result => console.log(result),
        error => console.log(error)
    );
}
//Exercicio 4 - 11
function exercicio11() {
    let areaR = (Retangulo) => Retangulo.altura * Retangulo.largura;
    console.log("Exercicio 11 - Area do retangulo: " + areaR(objetoRetangulo));
}
//Exercicio 4 - 12
let showEndereco = (bairro, cidade, estado) => `Endereco: ${bairro}, ${cidade}, ${estado}`;
function exercicio12() {
    console.log("Exercicio 12 - Resultado", showEndereco("Estreito", "Florianopolis", "Santa Catarina"));
}
//Exercicio 4 - 13
let retornaListaSC = (listCidade) => listCidade.filter(cidade => cidade.estado == "SC");
function exercicio13() {
    console.log("Exercicio 13 - Retorno da lista de cidades de SC: ", retornaListaSC(arrayCidades))
}
//Exercicio 4 - 14
let retornaString = (listCidade) => listCidade.map(cidade => `${cidade.nome}, ${cidade.estado}`);
function exercicio14() {
    console.log("Exercicio 14 - Resultado da concatenacao: ", retornaString(arrayCidades))
}
//Exercicio 4 - 15
let retornaRS = (listCidade) => listCidade.some(cidade => cidade.estado == 'RS');
function exercicio15() {
    console.log("Exercicio 15 - Resultado cidade em RS: ", retornaRS(arrayCidades))
}
//Exercicio 4 - 16
function desmontar(listCidade) {
    let desmontarNome;
    let desmontarEstado;
    listCidade.forEach(element => {
        desmontarNome = element.nome;
        desmontarEstado = element.estado;
        console.log("Exercicio 16 - variaveis desmontadas: ", desmontarNome, desmontarEstado);
    });
    console.log("Exercicio 16 - Ultimo valor das variaveis: ", desmontarNome, desmontarEstado)
};
function exercicio16() {
    desmontar(arrayCidades);
}
//Exercicio 4 - 17
function ranking(a,b,c, ...resto) {
    let pos1 = `Posicao 1 = ${a}
    Posicao 2 = ${b}
    Posicao 3 = ${c}
    Demais = ${resto}`
    console.log("Exercicio 17 - Ranking: ", pos1);
};
function exercicio17() {
    ranking("Livro 1", "Livro 2", "Livro 3", "Livro 4", "Livro 5", "Livro 6", "Livro 7", "Livro 8", "Livro 9", "Livro 10");
}