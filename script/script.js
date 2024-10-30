import { dadosDoGrafico } from "./dadosDoGrafico.js";
import { graficoParaDolar } from "./graficoParaDolar.js";
import { graficoParaIene } from "./graficoParaIene.js";
import { imprimeCotacao } from "./imprimeCotacao.js";
import { graficoParaEuro } from "./graficoParaEuro.js";

//INICIANDO O TRABALHADOR DOLAR
let workerDolar = new Worker("/script/workers/workerDolar.js")
//envia uma mensagem para o worker
workerDolar.postMessage('usd');

//recebe mensagem do worker
workerDolar.addEventListener("message", event => {
    //recebe os dados
    let tempo = dadosDoGrafico.gerarHorario();
    let valor = event.data.ask;
    const lista = document.querySelector("#dolar")

    //gera grafico
    dadosDoGrafico.adicionarDados(graficoParaDolar, tempo, valor )


    //gera cotação
    imprimeCotacao("dolar", valor);
})


//INICIANDO O TRABALHADOR IENE
let workerIene = new Worker("/script/workers/workerIene.js")
//envia uma mensagem para o worker
workerIene.postMessage('iene');

//recebe mensagem do worker
workerIene.addEventListener("message", event => {
    //recebe os dados
    let tempo = dadosDoGrafico.gerarHorario();
    let valor = event.data.ask;

    //gera grafico
    dadosDoGrafico.adicionarDados(graficoParaIene, tempo, valor);

    //gera cotacao
    imprimeCotacao("iene", valor)
})


//INICIANDO O TRABALHADOR PARA EURO
let workerEuro = new Worker("/script/workers/workerEuro.js")
//envia mensagem para o worker
workerEuro.postMessage('euro')

//recebe mensagem do worker
workerEuro.addEventListener("message", event => {
    //recebe os dados
    let tempo = dadosDoGrafico.gerarHorario();
    let valor = event.data.ask;

    //gera grafico
    dadosDoGrafico.adicionarDados(graficoParaEuro, tempo, valor)

    //gera cotacao
    imprimeCotacao('euro', valor)
})



