import { WHITE } from '../colors'

function formatModal () {
  const modal = document.querySelector('.modal')
  modal.style.position = 'fixed'
  modal.style.zIndex = '1'
  modal.style.left = '0'
  modal.style.top = '0'
  modal.style.height = '100%'
  modal.style.width = '100%'
  modal.style.overflowY = 'auto'
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'

  // modal.style.display = 'none'
}

function formatModalContent () {
  const modalContent = document.querySelector('.modal-content')

  modalContent.style.backgroundColor = WHITE
  modalContent.style.margin = '20% auto'
  modalContent.style.padding = '50px'
  modalContent.style.width = '70%'
  modalContent.style.border = '0 1px 0 0 dotted black'
}

function formatBtnClose () {
  const btnClose = document.querySelector('.btnClose')

  btnClose.style.color = '#CCC'
  btnClose.style.float = 'right'
  btnClose.style.fontSize = '30px'
  btnClose.style.cursor = 'pointer'
}

function formatModalGrid () {
  const modalGrid = document.querySelector('.modal-grid')

  modalGrid.style.display = 'flex'
  modalGrid.style.flexWrap = 'wrap'
  modalGrid.style.justifyContent = 'space-around'
}

function formatModalTitle () {
  const modalTitle = document.querySelector('.modal-title')

  modalTitle.style.marginBottom = '15px'
}

export function createModal () {
  let modal = `
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
          <span class="btnClose">&times;</span>
          <h2 class="modal-title">PROMOÇÕES</h2>
          </div>
          <div class="modal-grid">
            <div class="promo">

            </div>
          </div>
        </div>
      </div>
  `
  let modalElement = document.createElement('div')
  modalElement.innerHTML = modal
  document.body.appendChild(modalElement)

  formatModal()
  formatModalContent()
  formatBtnClose()
  formatModalGrid()
  formatModalTitle()
}
