import {
    changeColor,
    changeBackgroundColor
} from '../utils'

import {
    WHITE,
    TOOLTIP_BACKGROUND_COLOR,
    LIGHT_RED,
    BG_COLOR_PAGE,
    BETWEEN_DATES_CALENDAR
} from '../colors'

function hoverCelula () {
  const haveStartDate = document.querySelector('.startDate')
  if (haveStartDate) {
    document.querySelectorAll('.inBetweenDate:not(.startDate)').forEach(el => {
      el.style.backgroundColor = BETWEEN_DATES_CALENDAR
    })
  }
  this.style.backgroundColor = LIGHT_RED
  this.style.borderRadius = '50%'
  this.style.width = '50px'
  changeTooltip()
}

function removeHoverCelula () {
  const isStartDate = this.classList.contains('startDate')
  if (!isStartDate) {
    this.style.backgroundColor = BG_COLOR_PAGE
    this.style.borderRadius = ''
    this.style.width = ''
  }

  const haveStartDate = document.querySelector('.startDate')
  if (haveStartDate) {
    document.querySelectorAll('.inBetweenDate').forEach(el => {
      el.style.backgroundColor = BG_COLOR_PAGE
    })
  }
}

function changeTooltip () {
  changeBackgroundColor('.calendario-tooltip', TOOLTIP_BACKGROUND_COLOR)

  changeColor('.tp-chegada', WHITE)
  changeColor('.tp-saida', WHITE)
}

function watchForSelection () {
  const startDate = document.querySelector('.celulaData.startDate')
  const allCelulas = document.querySelectorAll('.celulaData:not(.voidDate)')
  if (startDate) {
    startDate.setAttribute('style', `background-color: #F6534C !important`) // uso setAttribute para poder usar o !important
    startDate.style.width = '50px'
    startDate.style.borderRadius = '50%'
  } else {
    allCelulas.forEach(el => {
      el.setAttribute('style', `background-color: ${BG_COLOR_PAGE} !important`)
    })
  }
}

//Funções para alterar mostrar apenas 1 mês do calendário
function changeCalendarWidth () {
  const calendar = document.getElementById('busca-calendario')
  calendar.style.width = '530px'
  showOneMonth();
}

function showOneMonth() {
  const firstMonth = document.getElementById('calendario-1')
  firstMonth.style.width = '100%'

  const secondMonth = document.getElementById('calendario-2')
  secondMonth.style.width = '0%'
}

export function personalizeCalendar () {
  document.getElementById('busca-periodo-label').addEventListener('click', () => {
    changeCalendarWidth()
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

    document.querySelectorAll('.celulaData').forEach(el => el.addEventListener('mouseover', hoverCelula))
    document.querySelectorAll('.celulaData').forEach(el => el.addEventListener('mouseleave', removeHoverCelula))
    document.querySelectorAll('.celulaData').forEach(el => el.addEventListener('click', watchForSelection))
  })
}
