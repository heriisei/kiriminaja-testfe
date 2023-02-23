import { defineStore } from 'pinia'

interface KelurahanOption {
  id: number;
  text: string;
}

export const useEkspedisiStore = defineStore('ekspedisi', () => {
  const kelurahan = ref<KelurahanOption[]>()
  const getKelurahan = async (keyword: string) => {
    const response = await useNuxtApp().$ekspedisi.getKelurahan(keyword)
    kelurahan.value = response.data.value?.kelurahan
  }

  return {
    kelurahan,
    getKelurahan
  }
})