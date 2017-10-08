import { LIGHT_RED } from '../colors'

function adjustListagemContent () {
  const pageContent = document.getElementById('listagemHoteisContent')
  console.log(pageContent)
  pageContent.style.display = 'flex'
  pageContent.style.flexDirection = 'row'
  pageContent.style.justifyContent = 'space-between'
}

function adjustItemHotel () {
  const itemHotel = document.querySelectorAll('.itemHotel')

  itemHotel.forEach(el => {
    el.style.display = 'flex'
    el.style.flexDirection = 'column'
    el.style.margin = '50px'
    el.style.alignItems = 'center'
    el.style.backgroundColor = '#fff'
    el.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
    el.style.margin = '10px'
    el.style.padding = '10px'
  })
}

function adjustItemHotelContent () {
  const itemHotelContent = document.querySelectorAll('.itemHotelContent')

  itemHotelContent.forEach(el => {
    el.style.display = 'flex'
    el.style.flexDirection = 'column'
    el.style.justifyContent = 'space-between'
    el.style.marginLeft = 'auto'
    el.style.height = null
  })
}

function changeIconColor () {
  document.querySelectorAll('.mcolor-cliente-principal-text').forEach(el => {
    el.style.color = LIGHT_RED
  })
}

export function personalizeHotels () {
  adjustListagemContent()
  adjustItemHotel()
  adjustItemHotelContent()
  changeIconColor()
}
