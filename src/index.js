const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

// Pagando um arquivo de texto e quebrando ele em paragrafos
// =========================================================

fs.readFile(link, 'utf-8', (erro, texto) => {
   if (erro) {
    console.log('qual é o erro?', erro.code);
    return
   }
   contaPalavras(texto);
})

function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
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