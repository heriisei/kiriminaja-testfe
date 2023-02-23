<script setup>
import { storeToRefs } from 'pinia';
import { useEkspedisiStore } from '~~/store/ekspedisi';

const ekspedisi = useEkspedisiStore()
const { kelurahan } = storeToRefs(ekspedisi)
const { getKelurahan } = ekspedisi
const onSearch = (keyword) => {
  getKelurahan(keyword)
}
const renderLabel = (kelurahan) => kelurahan ? kelurahan.text : ''
const loading = ref(false)

const selectedKelurahan = ref('')
</script>
<template>
  <section>
    <h2 class="sr-only">
      Cek Ongkir Ekspedisi
    </h2>
    <form class="p-1.25rem bg-$bg-muted rounded-1.5rem">
      <i-select v-model="selectedKelurahan" :options="kelurahan" :label="renderLabel" :loading="loading" autocomplete
        placeholder="Choose something.." @search="onSearch" />
      <button type="submit" class="flex gap-.75rem justify-center w-full bg-$main-brand-color p-1rem rounded-full">
        <div class="i-tabler:search text-1.5rem"></div>
        Cek Ongkir
      </button>
    </form>
  </section>
</template>