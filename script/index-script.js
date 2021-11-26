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

    titulo.setAttribute('id', 'titulo')
    nomeInput.setAttribute('id', 'boxName')
    nomeInput.setAttribute('placeholder', 'Digite seu nome aqui')
    btnNext.setAttribute('type', 'button')
    btnNext.setAttribute('id', 'btnNext')
    btnNext.setAttribute('value', 'Iniciar Quiz')

    titulo.innerHTML = 'Olá, Faça seu Quiz!'

    c.appendChild(titulo)
    c.appendChild(nomeInput)
    b.appendChild(btnNext)
}

setInterval(
    function () {
        let data = new Date(), h = data.getHours()

        if(h >= 8 && h < 16) {
            main.style.background = '#d49253'
            main.style.transition = '1s'
        } else if(h >= 16 && h < 00) {
            main.style.background = '#e2df1b'
            main.style.transition = '1s'
        } else {
            main.style.background = '#11064b'
            main.style.color = 'white'
            main.style.transition = '1s'
        }
        
        return
    }, 300)