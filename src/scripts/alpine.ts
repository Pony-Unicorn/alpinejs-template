import type { Alpine } from 'alpinejs'
// @ts-ignore
import mask from '@alpinejs/mask'

import toasts from './components/toaster'
import { api } from './lib/api'

export default (Alpine: Alpine) => {
  Alpine.plugin(mask)

  Alpine.store('toasts', toasts)

  Alpine.magic('api', () => api)
}
