<script setup lang="ts">
// const kabar = await useFetch(`/api/kabar`, { pick: ['highlight'] })
// const kabar = await(await $fetch(`/api/kabar`)).highlight
const highlight = (await useNuxtApp().$kabar.getHighlight()).data.value?.highlight
</script>

<template>
  <div>
    <section>
      <h2 class="sr-only">
        Kabar dan Penelusuran
      </h2>
      <article v-for="kabar in highlight" :key="kabar.id" class="flex flex-col lg:flex-row">
        <div>
          <img :src="kabar.img" :alt="kabar.title">
        </div>
        <div>
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
        </div>
      </article>
    </section>
  </div>
</template>
