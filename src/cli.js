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
