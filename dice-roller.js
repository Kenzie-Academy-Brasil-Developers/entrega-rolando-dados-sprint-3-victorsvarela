

let resultDado1 = []
let resultDado2 = []
let somaDados = []
let constroiGrafico = []


const dado1 = document.querySelector('#caixa_dado1')
const dado2 = document.querySelector('#caixa_dado2')
const resultadoSoma = document.querySelector('#caixa_resultado')
const btnRollDice = document.querySelector('#rolar_dados')
const showResult = document.getElementsByTagName('div')[7]
const grafico = document.querySelector('#frequencia_grafico')

const rolarDados = () =>{
    
    showResult.innerHTML = ''
    grafico.innerHTML = ''
    
    let frequenciaNumeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < 1000; i++){
        
        // sorteia valores para cada [i]
        resultDado1[i] = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        resultDado2[i] = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        somaDados[i] = resultDado1[i] + resultDado2[i];
        
        // anexa resultado da última rolagem na tela
        dado1.innerText = resultDado1[i]
        dado2.innerText = resultDado2[i]
        resultadoSoma.innerText = somaDados[i]

        
        frequenciaNumeros[somaDados[i]] += 1
    }
    

    for (let j = 2; j < 13; j ++){
    
        const span = document.createElement('span')
        span.innerText =  (`${j} : ${frequenciaNumeros[j]} vezes\n`)
        showResult.appendChild(span)

        // faz as barras de tamanho da frequẽncia de números px
        const spanGrafico = document.createElement('span')
        const barraGrafico = document.createElement('div')
        barraGrafico.style.height = '14.8px'
        barraGrafico.style.backgroundColor = 'black'
        barraGrafico.style.width = `${frequenciaNumeros[j]}px`
        barraGrafico.style.margin = '3px 0'
        grafico.appendChild(barraGrafico)
    }


}


btnRollDice.addEventListener('click', rolarDados)