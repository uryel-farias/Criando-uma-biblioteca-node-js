const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

// Pagando um arquivo de texto e quebrando ele em paragrafos
// =========================================================

fs.readFile(link, 'utf-8', (erro, texto) => {
  quebraEmParagrafos(texto)
})

// função que faz a quebra do texto em paragrafos e ao final vericica as palavras duplicadas
// =========================================================================================

function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return[];
    return verificaPalavrasDuplicadas(paragrafo);
  })
  console.log(contagem);
}

// função que vericica as palavras duplicadas
// ==========================================

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  // objeto[propriedade] = valor;
  listaPalavras.forEach(palavra => {
    if(palavra.length >= 3) {
        const palavrasLimpa = limpaPalavras(palavra);
        resultado[palavrasLimpa] = (resultado[palavrasLimpa] || 0) + 1;
    }
  })
  return resultado;
}



function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}