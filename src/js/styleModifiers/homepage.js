import { LIGHT_RED, BG_COLOR_PAGE } from '../colors'
import { changeBackgroundColor, changeColor } from '../utils'

export function personalizeHomepage() {
    changeBackgroundColor('.mcolor-header', LIGHT_RED) //Altera cor do header
    changeBackgroundColor('.mcolor-cliente-principal-bg', BG_COLOR_PAGE)

    //Alteração de cores de labels
    changeColor('.mcolor-label-text', LIGHT_RED)
    changeColor('.mcolor-label-text2', LIGHT_RED)
    

}
