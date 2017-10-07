import { 
    changeColor, 
    changeBackgroundColor, 
    betweenDatesCalendar 
} from '../functions'

import { 
    white, 
    tooltipBackgroundColor, 
    celularBackgroundColor, 
    bgColorPage 
} from '../colors'

let dataChegada = document.getElementById('var-busca-chegada')
let dataSaida = document.getElementById('var-busca-partida')

dataSaida.value = ''

let startDate = null;
let finalDate = null;

function hoverCelula() {   
    this.style.backgroundColor = celularBackgroundColor
    this.style.borderRadius = '50%'
    this.style.width = '50px'
    changeTooltip()
    
    const beetweenDates = document.querySelectorAll('.inBetweenDate');
    if (beetweenDates.length) {
        beetweenDates.forEach(el => {
            el.backgroundColor = tooltipBackgroundColor
        });
    }
}

function removeHoverCelula() {
    if (!this.classList.contains('startDate')) {
        this.style.backgroundColor = bgColorPage
    } else {
        this.style.backgroundColor = celularBackgroundColor
    } 
}

function selectCelula() {

}

function changeTooltip() {
    changeBackgroundColor('.calendario-tooltip', tooltipBackgroundColor)
    const tpSaida = document.querySelector('.tp-saida')
    const tpData = document.querySelector('.tp-data')

    changeColor('.tp-chegada', white)
    changeColor('.tp-saida', white)
}

export function personalizeCalendar() {
    const selectDate = document.getElementById('busca-periodo-label').addEventListener('click', () => {

        //Dias do calendário para branco, setando algumas propriedades da classe antiga.
        document.querySelectorAll('#busca-calendario .dia-semana').forEach(el => {
            el.classList.remove('dia-semana')
            el.style.color = white
            el.style.display = 'inline-block'
            el.style.width = '55px'
            el.style.float = 'left'
        })

        document.querySelectorAll('.bestRate').forEach(el => {
            el.style.color = white
        })

        document.querySelectorAll('.celulaData').forEach(el => el.addEventListener('mouseenter', hoverCelula))
        document.querySelectorAll('.celulaData').forEach(el => el.addEventListener('mouseleave', removeHoverCelula))
        document.querySelectorAll('.celulaData').forEach(el => el.addEventListener('click', selectCelula))
    })
}