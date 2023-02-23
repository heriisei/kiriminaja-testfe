<script setup lang="ts">
const highlight = (await useNuxtApp().$kabar.getHighlight()).data.value?.highlight

const activeKabar = ref(0);
</script>

<template>
  <main>
    <h1 class="sr-only">
      Homepage
    </h1>
    <section>
      <h2 class="sr-only">
        Kabar dan Penelusuran
      </h2>
      <article
        v-for="(kabar, index) in highlight"
        :key="kabar.id" class="flex-col lg:flex-row"
        :class="index !== activeKabar ? 'hidden': 'flex'"
      >
        <div class="flex justify-center items-center mb-1rem">
          <img :src="kabar.img" :alt="kabar.title" class="w-full h-auto aspect-square object-contain">
        </div>
        <div>
          <p class="text-$main-brand-color-muted bg-$bg-muted border-0 rounded-full py-6px px-12px text-.875rem italic font-500">
            Agregator Logistik Multi Ekspedisi, Bisa Kirim Paket COD
          </p>
          <h3 class="text-30px font-700 mt-12px mb-20px lh-120%">
            {{ kabar.title }}
          </h3>
          <p class="text-$text-muted text-1.125rem lh-1.75rem">
            {{ kabar.desc }}
          </p>
          <ul class="text-$text-muted-2 mt-1.75rem flex flex-col gap-1rem">
            <li v-for="(benefit, index) in kabar.benefits" :key="index" class="flex gap-.5rem">
              <div class="i-tabler:discount-check-filled text-$bg-green text-1.5rem"></div>
              <p class="text-.875rem">
                {{ benefit }}
              </p>
            </li>
          </ul>
          <div class="mt-2.5rem mb-1.25rem flex flex-col gap-1rem">
            <a
              href="https://dashboard.kiriminaja.com/v3/mbr20/register"
              class="flex justify-between bg-$main-brand-color rounded-full py-1rem px-2rem"
            >
              Daftar Gratis
              <div class="i-tabler:arrow-right text-1.5rem"></div>
            </a>
            <NuxtLink :to="`/kabar/${kabar.slug}`" class="flex gap-.75rem rounded-full py-1rem px-2rem">
              <div class="i-tabler:book text-1.5rem"></div>
              Selengkapnya
            </NuxtLink>
          </div>
          <div class="flex gap-1rem items-center">
            <button
              class="btn-arrow"
              aria-label="Kabar Sebelumnya"
              @click="activeKabar > 0 ? activeKabar-- : activeKabar = 3"
            ><div class="i-tabler:arrow-left"></div></button>
            <div><span class="text-$text-muted">{{ activeKabar + 1 }}</span> / 4</div>
            <button
              class="btn-arrow"
              aria-label="Kabar selanjutnya"
              @click="activeKabar < 3 ? activeKabar++ : activeKabar = 0"
            ><div class="i-tabler:arrow-right"></div></button>
          </div>
        </div>
      </article>
    </section>
    <CekOngkir />
  </main>
</template>

<style scoped>
.btn-arrow {
  @apply flex justify-center items-center border-1px border-$bg-muted-2 rounded-full hover:bg-$bg-muted-2 p-.25rem text-1.55rem;
}
</style>