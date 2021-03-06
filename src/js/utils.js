export function changeBackgroundColor (element, color) {
  document.querySelectorAll(element).forEach(el => el.style.backgroundColor = color)
}

export function changeColor (element, color) {
  document.querySelectorAll(element).forEach(el => el.style.color = color)
}

export function hideElements (element) {
  document.querySelectorAll(element).forEach(el => el.style.display = 'none')
}

export function showElements (element) {
  document.querySelectorAll(element).forEach(el => el.style.display = 'block')
}

export function setWidth (element, width) {
  document.querySelectorAll(element).forEach(el => el.style.width = width)
}

export function openModal () {
  const modal = document.querySelector('.modal')

  modal.style.display = 'block'

  document.body.style.overflowY = 'hidden' // Tiro scroll do body
}
