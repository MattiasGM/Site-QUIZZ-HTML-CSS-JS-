addEventListener('load', pageLoad)

function pageLoad() {
    
    let conteudo = document.querySelector('#conteudo')
    let alternativas = document.querySelector('#ulRespotas')
    let btnNext = document.querySelector('#divBtnNext')
    
    initQuizz(conteudo, btnNext)
    let nome = addNome()
    alert(nome)

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

    btnNext.addEventListener('click', addNome)
    
}

function addNome() {
    let nome = querySelector('#boxName').value
    return nome
}