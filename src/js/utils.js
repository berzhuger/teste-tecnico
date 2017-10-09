export function changeBackgroundColor (element, color) {
  document.querySelectorAll(element).forEach(el => el.style.backgroundColor = color)
}

export function changeColor (element, color) {
  document.querySelectorAll(element).forEach(el => el.style.color = color)
}

export function hideElements (element) {
  document.querySelectorAll(element).forEach(el => el.style.display = 'none');
}

export function setWidth (element, width) {
  console.log(element)
  console.log(width)
  console.log('------')
  document.querySelectorAll(element).forEach(el => el.style.width = width)
}
