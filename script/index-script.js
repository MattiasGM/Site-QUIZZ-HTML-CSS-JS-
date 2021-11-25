addEventListener('load', pageLoad)

function pageLoad() {
    let data = new Date(), hora = data.getHours()
    let conteudo = document.querySelector('#conteudo')
    let alternativas = document.querySelector('#ulRespotas')
    let btnNext = document.querySelector('#btnNext')
    
    backgroundInterative(hora)

    let nome = initQuizz(conteudo, btnNext)

}

function backgroundInterative(h) {
    if(h >= 8 && h < 16) {
        main.style.background = '#d49253'
        main.style.transition = '3s'
    } else if(h >= 16 && h < 00) {
        main.style.background = '#e2df1b'
        main.style.transition = '3s'
    } else {
        main.style.background = '#11064b'
        main.style.color = 'white'
        main.style.transition = '3s'
    }
    return
}

function initQuizz(c,b) {
    let nomeInput = document.createElement('input')
    let btnNext = document.createElement('input')

    btnNext.setAttribute('type', 'button')

    c.appendChild(nomeInput)
    c.appendChild(btnNext)
}