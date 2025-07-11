import fs from 'fs';
import trataErros from './erros/funcoesErros.js'
import { contaPalavras } from './index.js';


const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 
const endereco = caminhoArquivo[3]

// Pagando um arquivo de texto e quebrando ele em paragrafos
// =========================================================

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, endereco);
    } catch(erro) {
        trataErros(erro);
    }
});

async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado');
    } catch (erro) {
        throw erro;
    }
}