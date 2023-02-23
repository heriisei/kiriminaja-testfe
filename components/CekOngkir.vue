<script setup lang="ts">
const itemWeight = ref<number>(1000)
</script>

<template>
  <section>
    <h2 class="sr-only">
      Cek Ongkir Ekspedisi
    </h2>
    <IForm class="p-1.25rem bg-$bg-muted rounded-1.5rem">
      <FieldSelectKelurahan label="Asal" />
      <FieldSelectKelurahan label="Tujuan" />
      <IFormGroup>
        <IFormLabel>Berat</IFormLabel>
        <INumberInput v-model="itemWeight" placeholder="1000">
          <template #suffix>gram</template>
        </INumberInput>
      </IFormGroup>
      <button type="submit"
        class="flex gap-.75rem justify-center w-full bg-$main-brand-color p-1rem rounded-full mt-1rem">
        <div class="i-tabler:search text-1.5rem"></div>
        Cek Ongkir
      </button>
    </IForm>
  </section>
</template>