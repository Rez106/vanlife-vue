<template>
  <div class="w-full p-4">
    <div class="w-full mb-2">
      <div class="w-full bg-orange-200 px-4 py-5 rounded-t-lg">
        <p class="text-3xl font-bold text-slate-800">Welcome!</p>
        <div class="flex justify-between items-center py-5">
          <p>
            Income for
            <span class="underline font-semibold underline-offset-2">
              30 days
            </span>
          </p>
          <router-link class="font-semibold text-slate-700" to="/host/income">
            Details
          </router-link>
        </div>
        <p class="text-4xl text-slate-800 font-bold">$2,260</p>
      </div>
      <div class="w-full bg-orange-300 p-4 rounded-b-lg">
        <div class="flex justify-between items-center">
          <p class="flex items-center font-bold text-slate-800 text-lg">
            Review score
            <span class="ml-2 flex items-center text-amber-600 drop-shadow-sm">
              <Icon icon="openmoji:star" />
              <span class="ml-1 text-slate-800">5.0</span>
              <span class="text-slate-600">/5</span>
            </span>
          </p>
          <router-link class="font-semibold text-slate-700" to="/host/reviews">
            Details
          </router-link>
        </div>
      </div>
    </div>
    <ListedVans />
  </div>
</template>

<script setup>
  import ListedVans from "./ListedVans.vue";
  import { Icon } from "@iconify/vue/dist/iconify.js";
</script>

<style lang="scss" scoped></style>
