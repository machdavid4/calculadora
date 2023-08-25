let valorPrimario;
let operacao;
let valorSecundario;
let resultado;

function imprimirPrimario (valorPrimario) {
  switch (valorPrimario) {
    case document.getElementById('botao1'):
      valorPrimario = 1;
      break;
    case document.getElementById('botao2'):
      valorPrimario = 2;
      break;
    case document.getElementById('botao3'):
      valorPrimario = 3;
      break;
    case document.getElementById('botao4'):
      valorPrimario = 4;
      break;
    case document.getElementById('botao5'):
      valorPrimario = 5;
      break;
    case document.getElementById('botao6'):
      valorPrimario = 6;
      break;
    case document.getElementById('botao7'):
      valorPrimario = 7;
      break;
    case document.getElementById('botao8'):
      valorPrimario = 8;
      break;
    case document.getElementById('botao9'):
      valorPrimario = 9;
      break;
    case document.getElementById('botao0'):
      valorPrimario = 0;
  }
  
  console.log(valorPrimario);
}

function imprimirOperacao (operacao) {
  switch (operacao) {
    case document.getElementById('botaoDivisao'):
      operacao = '/';
      break;
    case document.getElementById('botaoMultiplicacao'):
      operacao = '*';
      break;
    case document.getElementById('botaoSubtracao'):
      operacao = '-';
      break;
    case document.getElementById('botaoAdicao'):
      operacao = '+';
  }
  
  console.log(operacao);
}

function imprimirSecundario (valorSecundario) {
  switch (valorSecundario) {
    case document.getElementById('botao1'):
      valorSecundario = 1;
      break;
    case document.getElementById('botao2'):
      valorSecundario = 2;
      break;
    case document.getElementById('botao3'):
      valorSecundario = 3;
      break;
    case document.getElementById('botao4'):
      valorSecundario = 4;
      break;
    case document.getElementById('botao5'):
      valorSecundario = 5;
      break;
    case document.getElementById('botao6'):
      valorSecundario = 6;
      break;
    case document.getElementById('botao7'):
      valorSecundario = 7;
      break;
    case document.getElementById('botao8'):
      valorSecundario = 8;
      break;
    case document.getElementById('botao9'):
      valorSecundario = 9;
      break;
    case document.getElementById('botao0'):
      valorSecundario = 0;
  }
  
  console.log(valorSecundario);
}

function imprimirResultado (resultado) {
  switch (resultado) {
    case document.getElementById('botaoDivisao'):
      resultado = valorPrimario / valorSecundario;
      break;
    case document.getElementById('botaoMultiplicacao'):
      resultado = valorPrimario * valorSecundario;
      break;
    case document.getElementById('botaoSubtracao'):
      resultado = valorPrimario - valorSecundario;
      break;
    case document.getElementById('botaoAdicao'):
      resultado = valorPrimario + valorSecundario;
  }
  
  console.log(resultado);
}

imprimirPrimario();
imprimirOperacao();
imprimirSecundario();
imprimirResultado();