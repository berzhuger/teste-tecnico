export function renderPromoTitle (title) {
  const promo = document.createElement('span')

  promo.textContent = title

  // Estilos do span
  promo.style.fontWeight = 'bold'
  return promo
}
