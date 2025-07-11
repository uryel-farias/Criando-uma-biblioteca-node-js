

export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap(paragrafo => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    });
    return contagem;
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