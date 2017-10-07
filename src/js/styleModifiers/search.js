import { lightRed, searchBackgroundColor, searchDarkColor, white } from '../colors'
import { changeBackgroundColor, changeColor } from '../functions'

export function personalizeSearch() {
    changeBackgroundColor('.mcolor-busca-bright', searchBackgroundColor) //Altera cor do header
    changeBackgroundColor('.mcolor-busca-dark', searchDarkColor)
    changeBackgroundColor('.mcolor-action-btn', lightRed)

    //Alteração de cores de labels
    changeColor('#busca-promocode-label', white)

}