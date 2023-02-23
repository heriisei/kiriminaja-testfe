<script setup lang="ts">
// const kabar = await useFetch(`/api/kabar`, { pick: ['highlight'] })
// const kabar = await(await $fetch(`/api/kabar`)).highlight
const highlight = await useNuxtApp().$kabar.getHighlight()
</script>

<template>
  <div>
    hai {{ highlight.data.value?.extra }}
  </div>
</template>
