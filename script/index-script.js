addEventListener('load', pageLoad)

//----------  Configurações do Quiz -------------\\
let titleQuiz = 'Descubra quem você seria em Squid Game/Round 6!'
let descriçãoQuiz = '-Oh II-nam <br> -Ali Abdul <br> -Sang-woo <br> -Sae-Byeok <br> -Gi-hun <br> -Mi-nyeo <br> -Deok-su <br> -Ji-yeong <br> -Jun-ho'
let imgQuiz = 'imagens/round-6.jpg'
let max = 10 // quantas perguntas o quiz vai possuir -- + de 10 ele pode ter 2 linhas ou mais de progressBar
//------------------------------------------------\\

let nome = ''

let respostas = []

let perguntas = {
    pergunta_1: 'Você acha que ganharia que jogos?',
    pergunta_2: ''
}

let alternativas = {
    bloco_1: {
        alternativa_1: 'Batatinha Frita 1, 2, 3',
        alternativa_2: 'Colméia de Açucar',
        alternativa_3: 'Briga a Noite',
        alternativa_4: 'Cabo de Guerra',
        alternativa_5: 'Bolinha de Gude',
        alternativa_6: 'Ponte de Vidro',
        alternativa_7: 'Jogo da Lula'
    },
    bloco_2: {
        
    }
}

function pageLoad() {
    
    let conteudo = document.querySelector('#conteudo')
    let alternativas = document.querySelector('#ulRespostas')
    let btnNext = document.querySelector('#divBtnNext')
    
    if(nome.length == 0) {
        initQuizz(conteudo, btnNext)
    } else {
        page(conteudo, alternativas)
    }
}

function initQuizz(c,b) {
    let divImg = document.createElement('div')
    let img = document.createElement('img')
    let titulo = document.createElement('h1')
    let descrição = document.createElement('div')
    let descriçãoTitulo = document.createElement('h2')
    let descriçãoParagrafo = document.createElement('p')
    let nomeInput = document.createElement('input')
    let btnNext = document.createElement('input')
    
    divImg.setAttribute('id', 'divImg')
    img.setAttribute('src', imgQuiz)
    titulo.setAttribute('id', 'titulo')
    descrição.setAttribute('id', 'descrição')
    nomeInput.setAttribute('id', 'boxName')
    nomeInput.setAttribute('placeholder', 'Digite seu nome aqui')
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
    c.appendChild(nomeInput)
    b.appendChild(btnNext)

    btnNext.addEventListener('click', function(){
        nome = document.querySelector('#boxName').value
        if(nome.length != 0) {
            pageLoad()
        } else {
            alert('[ERRO] Caixa Vazia')
        }
    }) 
}

function page(c,a) { // página genérica de quiz
    divImg.remove()
    descrição.remove()
    boxName.remove()
    btnNext.remove()

    CreatProgressBar(c)
    let pergunta = document.createElement('h1')
    pergunta.setAttribute('id', 'pergunta')

    pergunta.innerHTML = `${/*verificarAlternativas()*/perguntas.pergunta_1}`
    
    c.appendChild(pergunta)

    let contador = Object.values(/*verificarAlternativas()*/alternativas.bloco_1) // alternativas em lista para o quiz
    for(let i = 0; i < contador.length; i++){
        let opções = document.createElement('li')
        opções.innerText = `${contador[i]}`
        a.appendChild(opções)
    }
    
    opções.addEventListener('click', function() {
        alert('ksfd')
    })
}

//function verificarAlternativas() {

//}


function CreatProgressBar(c) {
    let divProgressBar = document.createElement('div')
    divProgressBar.setAttribute('id', 'divProgressBar')

    for(let i = 1; i <= max; i++){
        let progressBar = document.createElement('input')
        progressBar.setAttribute('type', 'button')
        if(i < max) {
            progressBar.setAttribute('value', i)
        } else {
            progressBar.setAttribute('value', 'AD')
        }
        progressBar.setAttribute('id', `progressBar${i}`)
        progressBar.setAttribute('class', 'progressBar')
        divProgressBar.appendChild(progressBar)
    }

    c.appendChild(divProgressBar)
    return
}
