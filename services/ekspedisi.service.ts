export default () => {
  return {
    getKelurahan: async (keyword: string) => await useFetch(() => `/api/ekspedisi`, { pick: ['kelurahan'], query: { keyword } })
  }
}