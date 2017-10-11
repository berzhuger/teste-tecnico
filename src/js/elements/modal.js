import { WHITE } from '../colors'

function formatModal () {
  const modal = document.querySelector('.modal')
  modal.style.position = 'fixed'
  modal.style.zIndex = '1'
  modal.style.left = '0'
  modal.style.top = '0'
  modal.style.height = '100%'
  modal.style.width = '100%'
  modal.style.overflowY = 'hidden'
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'

  modal.style.display = 'none'
}

function formatModalContent () {
  const modalContent = document.querySelector('.modal-content')

  modalContent.style.backgroundColor = WHITE
  modalContent.style.margin = '15% auto'
  modalContent.style.padding = '50px'
  modalContent.style.width = '50%'
  modalContent.style.height = '400px'
  modalContent.style.position = 'absolute'
  modalContent.style.left = '20%'
  modalContent.style.top = '-20%'
  modalContent.style.overflow = 'auto'
  modalContent.style.zIndex = '1000'
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

  modalTitle.style.marginBottom = '40px'
}

function listenersToClose () {
  const modal = document.querySelector('.modal')
  const close = document.querySelector('.btnClose')
  console.log(close)
  close.addEventListener('click', () => closeModal(modal))
  window.addEventListener('click', (e) => outsideClick(e, modal))
}

function closeModal (modal) {
  modal.style.display = 'none'
  document.body.style.overflowY = 'auto'
}

function outsideClick (e, modal) {
  if (e.target === modal) {
    modal.style.display = 'none'
    document.body.style.overflowY = 'auto'
  }
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

  listenersToClose()
}
