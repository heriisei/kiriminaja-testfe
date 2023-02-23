import kabar from "~~/services/kabar.service"
import kabarService from "~~/services/kabar.service"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      kabar: {
        ...kabarService(),
      }
    }
  }
})
