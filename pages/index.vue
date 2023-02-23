<script setup lang="ts">
// const kabar = await useFetch(`/api/kabar`, { pick: ['highlight'] })
// const kabar = await(await $fetch(`/api/kabar`)).highlight
const highlight = (await useNuxtApp().$kabar.getHighlight()).data.value?.highlight
</script>

<template>
  <div>
    <article v-for="kabar in highlight" :key="kabar.id">
      <h3>
        {{ kabar.title }}
      </h3>
      <p>
        {{ kabar.desc }}
      </p>
      <ul>
        <li v-for="(benefit, index) in kabar.benefits" :key="index">{{ benefit }}</li>
      </ul>
      <div>
        <NuxtLink :to="`/kabar/${kabar.slug}`" class="n-link-base">Selengkapnya</NuxtLink>
      </div>
    </article>
  </div>
</template>
