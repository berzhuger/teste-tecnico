import {
    changeColor,
    changeBackgroundColor
} from '../utils'

import {
    WHITE,
    TOOLTIP_BACKGROUND_COLOR,
    LIGHT_RED,
    BG_COLOR_PAGE
} from '../colors'

let dataChegada = document.getElementById('var-busca-chegada')
let dataSaida = document.getElementById('var-busca-partida')

dataSaida.value = ''

let startDate = null
let finalDate = null

function hoverCelula () {
  this.style.backgroundColor = LIGHT_RED
  this.style.borderRadius = '50%'
  this.style.width = '50px'
  changeTooltip()

  const beetweenDates = document.querySelectorAll('.inBetweenDate')
  if (beetweenDates.length) {
    beetweenDates.forEach(el => {
      el.backgroundColor = TOOLTIP_BACKGROUND_COLOR
    })
  }
}

function removeHoverCelula () {
  if (!this.classList.contains('startDate')) {
    this.style.backgroundColor = BG_COLOR_PAGE
  } else {
    this.style.backgroundColor = LIGHT_RED
  }
}

function changeTooltip () {
  changeBackgroundColor('.calendario-tooltip', TOOLTIP_BACKGROUND_COLOR)
  
  changeColor('.tp-chegada', WHITE)
  changeColor('.tp-saida', WHITE)
}

export function personalizeCalendar () {
  document.getElementById('busca-periodo-label').addEventListener('click', () => {
        // Dias do calendário para branco, setando algumas propriedades da classe antiga.
    document.querySelectorAll('#busca-calendario .dia-semana').forEach(el => {
      el.classList.remove('dia-semana')
      el.style.color = WHITE
      el.style.display = 'inline-block'
      el.style.width = '55px'
      el.style.float = 'left'
    })

    document.querySelectorAll('.bestRate').forEach(el => {
      el.style.color = WHITE
    })

    document.querySelectorAll('.celulaData').forEach(el => el.addEventListener('mouseenter', hoverCelula))
    document.querySelectorAll('.celulaData').forEach(el => el.addEventListener('mouseleave', removeHoverCelula))
    document.querySelectorAll('.celulaData').forEach(el => el.addEventListener('click', selectCelula))
  })
}
