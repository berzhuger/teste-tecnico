import {
  createPromoTitle,
  createDivPromo,
  createDescription,
  createOldPrice,
  createNewPrice,
  createButton
} from '../elements/promoElements'

function renderPromocoes (promos) {
  console.log(promos)
  for (let obj of promos) {
    const divPromo = createDivPromo()
    divPromo.appendChild(createPromoTitle(obj.NomeTarifa))

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
  $.get('https://www.pmweb.com.br/teste-cro/promocoes/1.json')
    .then(renderPromocoes)
}
