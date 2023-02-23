import { defineStore } from 'pinia'

export const useEkspedisiStore = defineStore('ekspedisi', () => {
  const kelurahan = ref()
  const getKelurahan = async () => {
    kelurahan.value = (await useNuxtApp().$ekspedisi.getKelurahan()).data.value?.kelurahan
  }

  return {
    kelurahan,
    getKelurahan
  }
})