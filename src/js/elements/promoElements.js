export function createDivPromo () {
  const divPromo = document.createElement('div')

  divPromo.style.flexGrow = '1'
  divPromo.style.width = '33%'
  divPromo.style.height = '250px'

  return divPromo
}

export function createPromoTitle (title) {
  const promo = document.createElement('span')

  promo.textContent = title

  // Estilos do span
  promo.style.fontWeight = 'bold'
  promo.style.marginBottom = '15px'
  return promo
}

export function createDescription (descriptions) {
  const elements = []
  for (let desc of descriptions) {
    const divDesc = document.createElement('span')

    divDesc.textContent = '- ' + desc

    divDesc.style.color = '#989898'
    divDesc.style.display = 'block'
    divDesc.style.fontWeight = 'normal'

    elements.push(divDesc)
  }

  return elements
}

export function createOldPrice (currency, priceWithoutPromo) {
  const oldPrice = document.createElement('span')

  oldPrice.textContent = `${currency} ${priceWithoutPromo}`

  oldPrice.style.textDecoration = 'line-through'
  oldPrice.style.color = '#989898'

  return oldPrice
}

export function createNewPrice (currency, value, element) {
  const price = document.createElement('span')

  price.textContent = `${currency} ${value}`

  price.style.padding = '5px'
  price.style.fontSize = '22px'
  price.style.color = '#f0661e'
  price.style.fontWeight = 'bold'

  return price
}

export function createButton (hotel, tarifa) {
  const button = document.createElement('button')

  button.textContent = 'Reservar'

  button.style.display = 'block'
  button.style.BorderRadius = '5px'
  button.style.fontSize = '20px'
  button.style.backgroundColor = '#f6534c'
  button.style.padding = '10px'
  button.style.border = '0'
  button.style.color = '#fff'

  button.addEventListener('click', () => window.alert(`Você reservou o hotel número ${hotel} com a tarifa ${tarifa}`))

  return button
}
