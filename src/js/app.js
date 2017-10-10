import { personalizeHomepage } from './styleModifiers/homepage'
import { personalizeSearch } from './styleModifiers/search'
import { personalizeCalendar } from './styleModifiers/calendar'
import { personalizeHotels } from './styleModifiers/hotels'
import { createModal } from './elements/modal'

import { getPromocoes } from './ajax/ajaxPromocoes'

// Modificadores de estilo
personalizeHomepage()
personalizeSearch()
personalizeCalendar()
personalizeHotels()

// Criadores de elementos
createModal()

// Chamadas AJAX
getPromocoes()
