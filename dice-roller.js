

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


// faz as barras de tamanho da frequẽncia de números px
const criaGrafico = (tamanho) => {

    const spanGrafico = document.createElement('span')
    const barraGrafico = document.createElement('div')
    barraGrafico.style.height = '14.8px'
    barraGrafico.style.backgroundColor = 'black'
    barraGrafico.style.width = `${tamanho}px`
    barraGrafico.style.margin = '3px 0'
    grafico.appendChild(barraGrafico)

}


const anexaUltimaRodada = (anexaDado1, anexaDado2, soma) => {
    
    dado1.innerText = anexaDado1
    dado2.innerText = anexaDado2
    
}


const rolarDados = () =>{
    
    showResult.innerHTML = ''
    grafico.innerHTML = ''
    
    let frequenciaNumeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < 1000; i++){
        
        // sorteia valores para cada [i]
        resultDado1[i] = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        resultDado2[i] = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        somaDados[i] = resultDado1[i] + resultDado2[i];
        
        // chama função para anexa
        // resultado da última rolagem na tela
        // por isso do if (i === 999), para ele chamar
        // a função se e somente se for a última rolagem
        if (i === 999){
            resultadoSoma.innerText = somaDados[i]
            anexaUltimaRodada(resultDado1[i], resultDado2[i], somaDados[i])
        }

        
        frequenciaNumeros[somaDados[i]] += 1
    }
    

    for (let j = 2; j < 13; j ++){
    
        const span = document.createElement('span')
        span.innerText =  (`${j} : ${frequenciaNumeros[j]} vezes\n`)
        showResult.appendChild(span)

        // chama função para criar os gráficos,
        // passando frequencia[i] como parâmetro
        criaGrafico(frequenciaNumeros[j])
    }


}


btnRollDice.addEventListener('click', rolarDados)