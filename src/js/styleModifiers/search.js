import { LIGHT_RED, SEARCH_BACKGROUND_COLOR, SEARCH_DARK_COLOR, WHITE } from '../colors'
import { changeBackgroundColor, changeColor } from '../utils'

export function personalizeSearch () {
  changeBackgroundColor('.mcolor-busca-bright', SEARCH_BACKGROUND_COLOR) // Altera cor do header
  changeBackgroundColor('.mcolor-busca-dark', SEARCH_DARK_COLOR)
  changeBackgroundColor('.mcolor-action-btn', LIGHT_RED)

    // Alteração de cores de labels
  changeColor('#busca-promocode-label', WHITE)
}
