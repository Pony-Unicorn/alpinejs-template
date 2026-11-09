import type { Alpine } from 'alpinejs'
// @ts-ignore
import mask from '@alpinejs/mask'

export default (Alpine: Alpine) => {
  Alpine.plugin(mask)
}
