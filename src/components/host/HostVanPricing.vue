<template>
  <div className="w-full">
    <p className="text-lg text-slate-400">
      <span className="text-3xl font-semibold text-slate-200">
        ${{ foundVan?.price }}
      </span>
      /day
    </p>
  </div>
</template>

<script setup>
  defineProps({
    foundVan: Object,
  });
</script>

<style lang="scss" scoped></style>
