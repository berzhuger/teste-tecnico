import {
  createPromoTitle,
  createDivPromo,
  createDescription,
  createOldPrice,
  createNewPrice,
  createButton,
  createPopOver
} from '../elements/promoElements'

// Renderiza os dados da chamada ajax dentro do modal
function renderPromocoes (promos) {
  for (let obj of promos) {
    const divPromo = createDivPromo()
    const title = createPromoTitle(obj.NomeTarifa)
    divPromo.appendChild(title)

    title.appendChild(createPopOver(obj.RegrasTarifa))

    const descricoes = createDescription(obj.DescricaoTarifa)

    for (let desc of descricoes) {
      divPromo.appendChild(desc)
    }

    divPromo.appendChild(createOldPrice(obj.TipoMoeda, obj.ValorTarifaSemDesconto))
    divPromo.appendChild(createNewPrice(obj.TipoMoeda, obj.ValorTarifa))
    divPromo.appendChild(createButton(obj.CodigoHotel, obj.CodigoTarifa))

    document.querySelector('.modal-grid').appendChild(divPromo)
  }
}

export function getPromocoes () {
  // Chamei apenas o id 1 pois não sabia o ID dos hoteis :/
  $.get('https://www.pmweb.com.br/teste-cro/promocoes/1.json')
    .then(renderPromocoes)
}
