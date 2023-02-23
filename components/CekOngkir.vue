<template>
  <section>
    <h2 class="sr-only">
      Cek Ongkir Ekspedisi
    </h2>
    <IForm class="p-1.25rem bg-$bg-muted rounded-1.5rem">
      <FieldSelectKelurahan label="Asal" />
      <FieldSelectKelurahan label="Tujuan" />
      <button type="submit" class="flex gap-.75rem justify-center w-full bg-$main-brand-color p-1rem rounded-full">
        <div class="i-tabler:search text-1.5rem"></div>
        Cek Ongkir
      </button>
    </IForm>
  </section>
</template>