<template>
  <div class="w-full mt-5">
    <p class="flex items-center gap-1 text-slate-300">
      <span class="text-xl font-semibold">5.0</span>
      <span class="text-amber-400 text-xl">
        <Icon icon="openmoji:star" />
      </span>
      <span class="text-sm">overall rating</span>
    </p>
    <div class="w-full flex flex-col gap-2 mt-5">
      <div
        v-for="data in chart"
        :key="data.id"
        class="w-full flex items-center"
      >
        <p class="w-1/5 text-slate-200 font-semibold text-lg">
          {{ data.name }}
        </p>
        <div class="w-3/5">
          <div class="relative w-full h-2 bg-slate-300 rounded-md">
            <div
              :style="{ width: data.count * 10 + '%' }"
              class="absolute max-w-full left-0 top-0 h-2 bg-amber-400 rounded-md"
            ></div>
          </div>
        </div>
        <p class="w-1/5 text-slate-200 font-semibold text-lg text-right">
          {{ data.count * 10 }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Icon } from "@iconify/vue/dist/iconify.js";
  import { ref, computed } from "vue";

  const chartData = ref([
    { id: 1, name: "1 star", count: 0 },
    { id: 2, name: "2 star", count: 0 },
    { id: 3, name: "3 star", count: 0 },
    { id: 4, name: "4 star", count: 0 },
    { id: 5, name: "5 star", count: 10 },
  ]);

  const chart = computed(() => chartData.value.slice().reverse());
</script>

<style scoped>
  /* Add your styles here */
</style>
