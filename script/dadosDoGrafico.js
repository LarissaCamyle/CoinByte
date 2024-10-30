export const dadosDoGrafico = {
    //converte o horario
    gerarHorario(){
        let data = new Date()
        let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
        return horario
    },

    //printa os dados no grafico
    adicionarDados(grafico, legenda, dados){
        grafico.data.labels.push(legenda)
        grafico.data.datasets.forEach((dataset) => {
            dataset.data.push(dados);
        });

        grafico.update();
    }
}