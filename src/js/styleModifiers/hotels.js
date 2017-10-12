import { LIGHT_RED, BG_PAGE_CONTENT, WHITE } from '../colors'
import { hideElements, setWidth, changeColor, showElements, openModal } from '../utils'

function adjustListagemContent () {
   // Faz a listagem de hoteis ficarem em grid lado a lado
  const pageContent = document.getElementById('listagemHoteisContent')
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
    el.style.backgroundColor = WHITE
    el.style.borderRadius = '10px'
    el.style.boxShadow = '10px 10px 34px -13px rgba(0,0,0,0.75);'
    el.style.margin = '10px'
    el.style.padding = '10px'
    el.style.paddingTop = '30px'
  })
}

function adjustItemHotelContent () {
  const itemHotelContent = document.querySelectorAll('.itemHotelContent')

  itemHotelContent.forEach(el => {
    el.style.display = 'flex'
    el.style.flexDirection = 'column'
    el.style.justifyContent = 'space-between'
    el.style.alignItems = 'center'
    el.style.marginLeft = 'auto'
    el.style.height = '100%'
  })

  removeBtnSelecionarAcomodacao()
  removeFormasDePagamento()
  changeValorWidth()
  changeTelefoneHotel()
  removePercentualDesconto()
}

function removePercentualDesconto () {
  hideElements('.itemVarPercentualDesconto')
}

function changeValorWidth () {
  setWidth('.itemVarValorSemDesconto', 'unset')
}

function removeBtnSelecionarAcomodacao () {
  hideElements('.itemBtnSelecionarAcomodacao')
}

function changeTelefoneHotel () {
  showElements('.itemVarDescricaoFormasPagamento')
}

function removeFormasDePagamento () {
  hideElements('.itemVarDescricaoFormasPagamento')
}

function adjustPageContent () {
  const pageContent = document.querySelector('.page-content')

  pageContent.style.boxShadow = ''
  pageContent.style.borderRadius = '5px'
  pageContent.style.backgroundColor = BG_PAGE_CONTENT
}

function changeIconColor () {
  changeColor('.mcolor-cliente-principal-text', LIGHT_RED)
}

function adjustBlocoReserve () {
  document.querySelectorAll('.blocoReserve').forEach(el => {
    el.style.position = 'relative'
  })
}

function adjustImgHotelArrowRight () {
  const arrowRight = document.querySelectorAll('.img-hotel-arrow-right')

  arrowRight.forEach(el => {
    el.style.left = '220px'
    el.style.zIndex = '1'
  })
}

function adjustImagesHotel () {
  setWidth('.varImgHotel, .slider-imagens-hotel, .slide img', '260px')
}

function changeTextPromos () {
  const texts = document.querySelectorAll('.itemBtnMaisAcomodacoes')

  texts.forEach(el => {
    el.textContent = 'Ver promoções do hotel'
    el.style.color = '#f6534e'
    el.style.marginTop = '15px'

    el.removeAttribute('onclick')
    el.addEventListener('click', openModal)
  })
}

export function personalizeHotels () {
  adjustListagemContent()
  adjustItemHotel()
  adjustItemHotelContent()
  adjustPageContent()
  adjustBlocoReserve()
  changeIconColor()

  adjustImgHotelArrowRight()
  adjustImagesHotel()

  changeTextPromos()
}
