import kabarService from "~~/services/kabar.service"
import ekspedisiService from "~~/services/ekspedisi.service"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      kabar: {
        ...kabarService(),
      },
      ekspedisi: {
        ...ekspedisiService(),
      }
    }
  }
})
