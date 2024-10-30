export function imprimeCotacao(nome, valor){
    const lista = document.querySelector(`#${nome}`)
    lista.innerHTML = '';

    const acentos = {
        "dolar": "dólar",
        "iene": "iene",
        "euro": "euro"
    }

    const plurais = {
        "dolar": "dólares",
        "iene": "ienes",
        "euro": "euros"
    }

    //em vez de somar ele multiplica i por 10 a cada loop
    //para imprimir 10, 100, 1000
    for(let i = 1; i <= 1000; i *= 10){
        const listaItem = document.createElement('li');

        //            10    dolar  RS:x.xx 
        listaItem.innerHTML = `${i} ${i === 1 ? acentos[nome] : plurais[nome]}: RS${(valor*i).toFixed(2)}`

        lista.appendChild(listaItem)

    }
}
