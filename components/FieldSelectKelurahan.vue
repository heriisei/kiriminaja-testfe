<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useEkspedisiStore } from '~~/store/ekspedisi';

const props = defineProps<{
  label: string
}>()

const ekspedisi = useEkspedisiStore()
const { kelurahan } = storeToRefs(ekspedisi)
const { getKelurahan } = ekspedisi
const onSearch = (keyword: string) => {
  getKelurahan(keyword)
}
const renderLabel = (kelurahan: Record<string, any>) => kelurahan ? kelurahan.text : ''
const loading = ref(false)
const selectedKelurahan = ref('')
</script>

<template>
  <IFormGroup>
    <IFormLabel>{{ props.label }}</IFormLabel>
    <ISelect v-model="selectedKelurahan" :options="kelurahan" :label="renderLabel" :loading="loading" autocomplete
      placeholder="Choose something.." @search="onSearch" />
  </IFormGroup>
</template>