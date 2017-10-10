import { renderPromoTitle } from '../elements/promoElements'

function renderPromocoes (promos) {
  console.log(promos)
  for (let obj of promos) {
    const divPromo = createDivPromo()
    const titulo = renderPromoTitle(obj.NomeTarifa)

    divPromo.appendChild(titulo)
    document.querySelector('.modal-grid').appendChild(divPromo)
  }
}

function createDivPromo () {
  const divPromo = document.createElement('div')

  divPromo.style.flexGrow = '1'
  divPromo.style.width = '33%'
  divPromo.style.height = '250px'

  return divPromo
}

export function getPromocoes () {
  $.get('https://www.pmweb.com.br/teste-cro/promocoes/1.json')
    .then(renderPromocoes)
}
