export function changeBackgroundColor(element, color) {
    document.querySelectorAll(element).forEach(el => el.style.backgroundColor = color)
}

export function changeColor(element, color) {
    document.querySelectorAll(element).forEach(el => el.style.color = color)
}