import type { Alpine } from 'alpinejs'
// @ts-ignore
import mask from '@alpinejs/mask'

import toasts from './components/toaster'

export default (Alpine: Alpine) => {
  Alpine.plugin(mask)

  Alpine.store('toasts', toasts)
}
