<template>
  <div className="w-full grid grid-cols-3 gap-3 ">
    <img className="w-full rounded-md" :src="foundVan?.image" alt="van-photo" />
  </div>
</template>

<script setup>
  defineProps({
    foundVan: Object,
  });
</script>

<style lang="scss" scoped></style>
