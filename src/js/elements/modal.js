import {
  formatModalTitle,
  formatModal,
  formatModalContent,
  formatBtnClose,
  formatModalGrid
} from '../styleModifiers/modal'

function listenersToClose () {
  const modal = document.querySelector('.modal')
  const close = document.querySelector('.btnClose')

  // Eventos que fecham modal tanto ao clicar no fechar, quanto fora da DIV
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
