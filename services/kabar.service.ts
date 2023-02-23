export default () => {
  return {
    getHighlight: async () => await useFetch(() => `/api/kabar`, { pick: ['extra'] })
  }
}