<script setup>
</script>
<template>
  <section>
    <h2 class="sr-only">
      Cek Ongkir Ekspedisi
    </h2>
    <form class="p-1.25rem bg-$bg-muted rounded-1.5rem">
      <i-select
          v-model="selectedKelurahan"
          :options="filteredKelurahan"
          autocomplete
          placeholder="Choose something.."
          @search="onSearch"
      />
      <button type="submit" class="flex gap-.75rem justify-center w-full bg-$main-brand-color p-1rem rounded-full">
        <div class="i-tabler:search text-1.5rem"></div>
        Cek Ongkir
      </button>
    </form>
  </section>
</template>