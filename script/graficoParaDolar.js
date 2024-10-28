const graficoDolar = document.querySelector("#graficoDolar");

export const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
    labels: [],
    datasets: [{
        label: 'Dólar',
        data: [],
        borderWidth: 1
    }]
    },
})