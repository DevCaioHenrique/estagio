// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA? 91

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k += 1;
  soma += k;
}
console.log(`1) valor da soma é ${soma}`);

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor
//sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13,
//21, 34...),escreva um programa na linguagem que desejar onde, informado um número
//, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número
// informado pertence ou não a sequência.

let numero = 13;
let penultimo = 0;
let ultimo = 1;
let resultado = 0;

  while (numero > resultado ) {
    resultado = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = resultado;
  }
  if(numero == 0){
    console.log("2)Este número faz parte da sequencia, o proximo será 1");
  } else if(numero == resultado){
    console.log("2)Este número " + numero +" faz parte da sequencia, o proximo será " + (resultado + penultimo));
  }else{
    console.log("2)Este número " + numero +" não faz parte da sequencia!");
  }
  








// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua
//preferência ou pode ser previamente definido no código;

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora,
//faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const faturamentoDiario = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

let totalFaturado = 0;
let diasComFaturamento = 0;
let diasSuperiorMediaMensal = 0;
let menorValor = Infinity;
let maiorValor = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
  const valor = faturamentoDiario[i].valor;

  if (valor > 0) {
    totalFaturado += valor;

    if (valor > maiorValor) {
      maiorValor = valor
    }

    if (valor < menorValor && valor > 0) {
      menorValor = valor
    }

    diasComFaturamento++;
  }
}

const mediaMensal = totalFaturado / diasComFaturamento;

for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i].valor > mediaMensal) {
    diasSuperiorMediaMensal++;
  }
}

console.log("3) dias superior a media mensal : " + diasSuperiorMediaMensal);
console.log("maior valor : " + maiorValor);
console.log("menor valor: " + menorValor);

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de
//  representação que cada estado teve dentro do valor total mensal da
//  distribuidora.

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};
let total = 0;

for (let estado in faturamento) {
  total += faturamento[estado];
}
console.log("4) total é: " + total);

let percentuais = {};
for (let estado in faturamento) {
  percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2) + "%";
}
console.log(percentuais);

//5) Escreva um programa que inverta os caracteres de um string.

//IMPORTANTE:
//a) Essa string pode ser informada através de qualquer entrada de sua preferência
//ou pode ser previamente definida no código;
//b) Evite usar funções prontas, como, por exemplo, reverse;

let palavra = "extrovertido";

function inverterPalavra(str) {
  let invertido = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertido += str[i];
  }
  return invertido;
}
console.log("5) palavra invertida: " + inverterPalavra(palavra));
