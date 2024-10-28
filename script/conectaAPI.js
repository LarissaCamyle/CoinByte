import { dadosDoGrafico } from "./dadosDoGrafico.js";
import { graficoParaDolar } from "./graficoParaDolar.js";

//recebe as informações da API e chama as funções
export async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    const conectaTraduzido = await conecta.json();
    
    //recebe os dados de tempo e valor
    let tempo = dadosDoGrafico.gerarHorario();
    let valor = conectaTraduzido.USDBRL.ask;

    //printa os dados
    dadosDoGrafico.adicionarDados(graficoParaDolar, tempo, valor)
}
