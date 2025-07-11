import fs from 'fs';
import trataErros from './erros/funcoesErros.js'
import { contaPalavras } from './index.js';


const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

// Pagando um arquivo de texto e quebrando ele em paragrafos
// =========================================================

fs.readFile(link, 'utf-8', (erro, texto) => {
  try {
    if (erro) throw erro
    contaPalavras(texto);
  } catch (erro){
    trataErros(erro);
  }
})

async function criaEsalvaArquivo (ListaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(ListaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado.')
    } catch (erro) {
        throw erro;
    }
}