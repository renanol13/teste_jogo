const box_jogo = document.querySelector('#box_jogo')
const cobra = document.querySelector('#cobra')
const up = document.querySelector('#up')
const down = document.querySelector('#down')
const left = document.querySelector('#left')
const right = document.querySelector('#rigth')
const but_posicao = [...document.querySelectorAll('button')]
let apaga_tempo = 0
let dir = 0
let bai = 0
let cim = 0
let esq = 0


window.addEventListener('load', () => {
    cobra.style = 'position:absolute;top:0px;bottom:0px;left:0px;right:0px'
})
  
const set_temp = (func) => {
    clearInterval(apaga_tempo)
    apaga_tempo = setInterval(func, 100)
}


const esquerda = () => {
    //console.log('esquerda');
    esq = parseInt(cobra.style.left) 
    cobra.style.left = esq - 10 + 'px'
    if (esq == 0) {
        console.log(esq);
        cobra.style.left = '390px'
    }
    set_temp(esquerda)
}

const direita = () => {
    cobra.style.left = `${esq}px`
    let dir = parseInt(cobra.style.right)
    cobra.style.right = dir - 10 + 'px'
    esq += 10
    if (dir == 0) {
        cobra.style.right = '390px'
        esq = 0
    }
    set_temp(direita)
}

const cima = () => {
    console.log('top');
    cim = parseInt(cobra.style.top) 
    cobra.style.top = cim - 10 + 'px'
    if (cim == 0) {
        cobra.style.top = '340px'
    }
    set_temp(cima)
}

const baixo = () => {
    cobra.style.top = cim + 'px'
    bai = parseInt(cobra.style.bottom) 
    cobra.style.bottom = bai - 10 + 'px'
    if (bai == 0) {
        cobra.style.bottom = '340px'
        cim = 0
    } else {
        cim += 10
    }
    set_temp(baixo)
}



but_posicao.forEach((elm) => {
    elm.addEventListener('click', (evt) => {
        const alvo = evt.target.id
        if (alvo == 'left') {
            esquerda()
        } else if (alvo == 'rigth') {
            direita()
        } else if (alvo == 'up') {
            cima()
        } else if(alvo == 'down') {
            baixo()
        }
    })
})






















// up.addEventListener('click', ()=>upper())




// const upper = () => {
//     cobra.style.left = cont++ + 'px'
//     if (cont == 420) {
//         cont = 0
//     }
// }

// console.log(cont);