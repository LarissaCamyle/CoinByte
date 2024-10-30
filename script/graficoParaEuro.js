const graficoEuro = document.getElementById('graficoEuro');

export const graficoParaEuro = new Chart(graficoEuro, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Euro',
            data: [],
            borderWidth: 1
        }]
    }
})