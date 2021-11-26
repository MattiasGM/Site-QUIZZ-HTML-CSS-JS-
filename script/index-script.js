addEventListener('load', pageLoad)

let nome = ''

let respostas = []

let perguntas = {
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
        page1(conteudo, alternativas, btnNext)
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
    img.setAttribute('src', 'imagens/round-6.jpg')
    titulo.setAttribute('id', 'titulo')
    descrição.setAttribute('id', 'descrição')
    nomeInput.setAttribute('id', 'boxName')
    nomeInput.setAttribute('placeholder', 'Digite seu nome aqui')
    btnNext.setAttribute('type', 'button')
    btnNext.setAttribute('id', 'btnNext')
    btnNext.setAttribute('value', 'Iniciar Quiz')

    titulo.innerHTML = 'Descubra quem você seria em Squid Game/Round 6!'
    descriçãoTitulo.innerHTML = 'Vamos Descobrir!'
    descriçãoParagrafo.innerHTML = '-Oh II-nam <br> -Ali Abdul <br> -Sang-woo <br> -Sae-Byeok <br> -Gi-hun <br> -Mi-nyeo <br> -Deok-su <br> -Ji-yeong <br> -Jun-ho'

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

function page1(c,a,b) {
    divImg.remove()
    descrição.remove()
    boxName.remove()
    btnNext.remove()

    //let progressBar = document.createElement('')
    let pergunta = document.createElement('h1')
    pergunta.setAttribute('id', 'pergunta')

    let contador = Object.values(perguntas.bloco_1)
    for(let i = 0; i < contador.length; i++){
        let opções = document.createElement('li')
        opções.innerText = `${contador[i]}`
        a.appendChild(opções)
    }
    pergunta.innerHTML = 'Você acha que ganharia que jogos?'

    c.appendChild(pergunta)
    
    opções.addEventListener('click', function() {
        alert('ksfd')
    })
}