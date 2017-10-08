import { LIGHT_RED, BG_PAGE_CONTENT, WHITE } from '../colors'

function adjustListagemContent () {
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
    // el.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
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
  const percentualDesconto = document.querySelectorAll('.itemVarPercentualDesconto')

  percentualDesconto.forEach(el => {
    el.style.display = 'none'
  })
}

function changeValorWidth () {
  const itemVarValorSemDesconto = document.querySelectorAll('.itemVarValorSemDesconto')

  itemVarValorSemDesconto.forEach(el => {
    el.style.width = 'unset'
  })
}

function removeBtnSelecionarAcomodacao () {
  const itemBtnSelecionarAcomodacao = document.querySelectorAll('.itemBtnSelecionarAcomodacao')

  itemBtnSelecionarAcomodacao.forEach(el => {
    el.style.display = 'none'
  })
}

function changeTelefoneHotel () {
  const telefoneHotel = document.querySelectorAll('.itemVarTelefoneHotel')

  telefoneHotel.forEach(el => {
    el.style.display = 'block'
  })
}

function removeFormasDePagamento () {
  const itemVarDescricaoFormasPagamento = document.querySelectorAll('.itemVarDescricaoFormasPagamento')

  itemVarDescricaoFormasPagamento.forEach(el => {
    el.style.display = 'none'
  })
}

function adjustPageContent () {
  const pageContent = document.querySelector('.page-content')

  pageContent.style.boxShadow = ''
  pageContent.style.borderRadius = '5px'
  pageContent.style.backgroundColor = BG_PAGE_CONTENT
}

function changeIconColor () {
  document.querySelectorAll('.mcolor-cliente-principal-text').forEach(el => {
    el.style.color = LIGHT_RED
  })
}

function adjustBlocoReserve () {
  document.querySelectorAll('.blocoReserve').forEach(el => {
    el.style.position = 'relative'
  })
}

export function personalizeHotels () {
  adjustListagemContent()
  adjustItemHotel()
  adjustItemHotelContent()
  adjustPageContent()
  adjustBlocoReserve()
  changeIconColor()
}
