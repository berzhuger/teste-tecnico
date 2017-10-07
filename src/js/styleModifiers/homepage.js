import { lightRed, bgColorPage } from '../colors'
import { changeBackgroundColor, changeColor } from '../functions'

export function personalizeHomepage() {
    changeBackgroundColor('.mcolor-header', lightRed) //Altera cor do header
    changeBackgroundColor('.mcolor-cliente-principal-bg', bgColorPage)

    //Alteração de cores de labels
    changeColor('.mcolor-label-text', lightRed)
    changeColor('.mcolor-label-text2', lightRed)
    

}
