import type { Alpine } from 'alpinejs'
// @ts-ignore
import mask from '@alpinejs/mask'

export default (Alpine: Alpine) => {
  const pathname = window.location.pathname

  Alpine.plugin(mask)

  console.log('pathname>>>', pathname)
}
