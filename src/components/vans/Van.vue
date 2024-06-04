<template>
  <router-link
    :to="{
      path: '/vans/' + van.id.toString(),
      query: { sort: sort },
    }"
  >
    <div class="w-full flex flex-col items-center rounded-lg h-fit">
      <img
        class="rounded-lg backdrop-blur-sm w-11/12 object-contain duration-200 hover:-translate-y-3"
        :src="van.image"
        :alt="`van${van.id}`"
      />
      <div class="flex w-full h-1/2 justify-between p-2">
        <div class="flex flex-col gap-2">
          <p class="text-slate-200 font-semibold">{{ van.name }}</p>
          <h4
            :class="`first-letter:uppercase font-semibold text-sm py-1 px-2 rounded-md text-slate-200 ${van.categoryColor}`"
          >
            {{ van.category }}
          </h4>
        </div>
        <div class="flex flex-col items-end">
          <p class="font-bold text-slate-200">${{ van.price }}</p>
          <p class="text-slate-200 text-sm">/day</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
  const { sort } = defineProps({
    van: Object,
    sort: String,
  });
</script>

<style lang="scss" scoped></style>
