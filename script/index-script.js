addEventListener('load', pageLoad)

//----------  Configurações do Quiz -------------\\
let titleQuiz = 'Descubra quem você seria em Squid Game/Round 6!'
let descriçãoQuiz = '-Oh II-nam <br> -Ali Abdul <br> -Sang-woo <br> -Sae-Byeok <br> -Gi-hun <br> -Mi-nyeo <br> -Deok-su <br> -Ji-yeong <br> -Jun-ho'
let imgQuiz = 'imagens/round-6.jpg'
let max = 10 // quantas perguntas o quiz vai possuir -- + de 10 ele pode ter 2 linhas ou mais de progressBar
//------------------------------------------------\\

let iniciar = false, pageOne = true, resetBar = false, contadorProgressBar = 0, result = []

let perguntas = {
        1: 'Você Acha Que Ganharia Quais Jogos?',
        2: 'E Qual Você Morreria?',
        3: 'Você Seria Capaz De Morrer Por Um Amigo',
        4: 'Você faz de tudo pra cumprir com suas promessas?',
        5: 'Você ama mais...',
        6: 'Você é mais...',
        7: 'Você se considera',
        8: 'Você confia fácil nos outros?',
        9: 'Qual você gosta mais?',
        10: 'Você é Gay'
    },
    alternativas = {
        1: {
            alternativa_1: 'Batatinha Frita 1, 2, 3',
            alternativa_2: 'Colméia de Açucar',
            alternativa_3: 'Briga a Noite',
            alternativa_4: 'Cabo de Guerra',
            alternativa_5: 'Bolinha de Gude',
            alternativa_6: 'Ponte de Vidro',
            alternativa_7: 'Jogo da Lula'
        },
        2: {
            alternativa_1: 'Batatinha Frita 1, 2, 3',
            alternativa_2: 'Colméia de Açucar',
            alternativa_3: 'Briga a Noite',
            alternativa_4: 'Cabo de Guerra',
            alternativa_5: 'Bolinha de Gude',
            alternativa_6: 'Ponte de Vidro',
            alternativa_7: 'Jogo da Lula'
        },
        3: {
            alternativa_1: 'Sim! Sou muito Fiel!',
            alternativa_2: 'Não! Minha vida vale mais!',
            alternativa_3: 'Depende quem...'
        },
        4: {
            alternativa_1: 'Sim! Sempre!',
            alternativa_2: 'Nem sempre...'
        },
        5: {
            alternativa_1: 'Você mesmo',
            alternativa_2: 'Os outros'
        },
        6: {
            alternativa_1: 'Sentimental',
            alternativa_2: 'Racional'
        },
        7: {
            alternativa_1: 'Aberto para os outros e novas descobertas',
            alternativa_2: 'Fechado e frio'
        },
        8: {
            alternativa_1: 'Sim',
            alternativa_2: 'Não',
            alternativa_3: 'Depende'
        },
        9: {
            alternativa_1: 'Gi-Hun',
            alternativa_2: 'Ali',
            alternativa_3: 'Sang-Woo',
            alternativa_4: 'deok-su',
            alternativa_5: 'Sae-Byeok',
            alternativa_6: 'Ii-Nam',
            alternativa_7: 'Ji Yeong',
            alternativa_8: 'Mi Nyeo'
        },
        10: {

        }
    }

function pageLoad() {
    
    let conteudo = document.querySelector('#conteudo')
    let alternativas = document.querySelector('#ulRespostas')
    let btnNext = document.querySelector('#divBtnNext')
    
    if(iniciar) {
        page(conteudo, alternativas)
    } else {
        initQuizz(conteudo, btnNext)
    }
}

function initQuizz(c,b) {
    let divImg = document.createElement('div')
    let img = document.createElement('img')
    let titulo = document.createElement('h1')
    let descrição = document.createElement('div')
    let descriçãoTitulo = document.createElement('h2')
    let descriçãoParagrafo = document.createElement('p')
    let btnNext = document.createElement('input')
    
    divImg.setAttribute('id', 'divImg')
    img.setAttribute('src', imgQuiz)
    titulo.setAttribute('id', 'titulo')
    descrição.setAttribute('id', 'descrição')
    btnNext.setAttribute('type', 'button')
    btnNext.setAttribute('id', 'btnNext')
    btnNext.setAttribute('value', 'Iniciar Quiz')

    titulo.innerHTML = `${titleQuiz}`
    descriçãoTitulo.innerHTML = 'Vamos Descobrir!'
    descriçãoParagrafo.innerHTML = `${descriçãoQuiz}`

    divImg.appendChild(img)
    divImg.appendChild(titulo)
    descrição.appendChild(descriçãoTitulo)
    descrição.appendChild(descriçãoParagrafo)

    c.appendChild(divImg)
    c.appendChild(descrição)
    b.appendChild(btnNext)

    btnNext.addEventListener('click', function(){
        iniciar = true
        
        divImg.remove()
        descrição.remove()
        btnNext.remove()

        CreatProgressBar(c)
        pageLoad()
    }) 
}

function page(c,a) { // página genérica de quiz
    contadorProgressBar++

    if(contadorProgressBar >= max) {
        resultado(c, a)
        barAtual()
    } else {
        if(pageOne) {
            pageOne = false
        } else {
            let removePergunta = document.querySelector('#pergunta')
            c.removeChild(removePergunta)
            removeAlternativas(a)
        }
        verificarPerguntas(c, contadorProgressBar)
        opções(a)
        barAtual()
    }
}

function opções(a) {
    let contador = Object.values(alternativas[contadorProgressBar]) // alternativas em lista para o quiz
    for(let i = 0; i < contador.length; i++){
        let opções = document.createElement('li')
        opções.innerHTML = `${contador[i]}`
        opções.setAttribute('id', i)
        a.appendChild(opções)
        opções.addEventListener('click', function() {
            result.push(opções.id)
            pageLoad()
        })
    }
}

function removeAlternativas(a) {
    let contador = Object.values(alternativas[contadorProgressBar - 1]) // alternativas em lista para o quiz
    for(let i = 0; i < contador.length; i++){
        let removeAlternativa = document.getElementById(i)
        a.removeChild(removeAlternativa)
    }
}

function verificarPerguntas(c, cpb) {
    let pergunta = document.createElement('h1')
    pergunta.setAttribute('id', 'pergunta')
    pergunta.innerHTML = perguntas[cpb]
    c.appendChild(pergunta)
}

function CreatProgressBar(c) { // barra de contagem das perguntas
    let divProgressBar = document.createElement('div')
    divProgressBar.setAttribute('id', 'divProgressBar')

    for(let i = 1; i <= max; i++){
        let progressBar = document.createElement('input')
        progressBar.setAttribute('type', 'button')
        if(i < max) {
            progressBar.setAttribute('value', i)
            progressBar.setAttribute('id', `progressBar${i}`)
        } else {
            progressBar.setAttribute('value', 'AD')
            progressBar.setAttribute('id', `progressBar${i}`)
        }
        progressBar.setAttribute('class', 'progressBar')
        divProgressBar.appendChild(progressBar)
        progressBar.addEventListener('click', function () {
            resetBar = true
            barAtual(progressBar)
            pageLoad()
        })
    }
    c.appendChild(divProgressBar)
}

function barAtual(p) {
    let barPassada = document.getElementById(`progressBar${contadorProgressBar - 1}`)
    let barAtual = document.getElementById(`progressBar${contadorProgressBar}`)

    if(!resetBar) {
        barPassada.setAttribute('class', 'progressBarPassada')
        barAtual.setAttribute('class', 'progressBarAtual')
    } else {
        resetBar = false
        for(let i = 0; i < max; i++) {
            if(p.value < i) {
                barAtual = document.getElementById(`progressBar${i}`)
                barAtual.setAttribute('class', 'progressBar')
                result.pop()
            } else if(p.value == i) {
                barAtual = document.getElementById(`progressBar${i}`)
                barAtual.setAttribute('class', 'progressBarAtual')
                result.pop()
                contadorProgressBar = i - 1
            }
        }
    }
}

function resultado(c, a) {
    let removePergunta = document.querySelector('#pergunta')
    c.removeChild(removePergunta)
    removeAlternativas(a)

    let random = Math.floor(Math.random() * 10)
    let contA = Object.values(alternativas[9])

    let resultado = document.createElement('p')
    resultado.setAttribute('id', 'pergunta')
    resultado.innerHTML = `Você seria o(a): ${contA[random]}`

    c.appendChild(resultado)

    /*
    for(let i = 1; i < max; i++) {
        

        let contA = Object.values(alternativas[i])
        for(let n = 0; n < contA.length; n++) {
            let cont = Object.values(result[n])
            if() {

            }
        }
    }
    */
}
