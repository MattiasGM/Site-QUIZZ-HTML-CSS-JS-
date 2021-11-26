addEventListener('load', pageLoad)

function pageLoad() {
    
    let conteudo = document.querySelector('#conteudo')
    let alternativas = document.querySelector('#ulRespotas')
    let btnNext = document.querySelector('#divBtnNext')
    
    

    let nome = initQuizz(conteudo, btnNext)

}

function initQuizz(c,b) {
    let titulo = document.createElement('h1')
    let nomeInput = document.createElement('input')
    let btnNext = document.createElement('input')
    let img = document.createElement('img')

    titulo.setAttribute('id', 'titulo')
    nomeInput.setAttribute('id', 'boxName')
    nomeInput.setAttribute('placeholder', 'Digite seu nome aqui')
    btnNext.setAttribute('type', 'button')
    btnNext.setAttribute('id', 'btnNext')
    btnNext.setAttribute('value', 'Iniciar Quiz')
    img.setAttribute('src', 'imagens/round-6.jpg')

    titulo.innerHTML = 'Descubra quem você seria em Round 6!'

    c.appendChild(img)
    c.appendChild(titulo)
    c.appendChild(nomeInput)
    b.appendChild(btnNext)
}