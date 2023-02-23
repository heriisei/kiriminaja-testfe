export default () => {
  return {
    getKelurahan: async () => await useFetch(() => `/api/ekspedisi`, { pick: ['kelurahan'] })
  }
}