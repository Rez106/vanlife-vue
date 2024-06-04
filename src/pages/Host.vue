<template>
  <div class="w-full">
    <nav class="w-full p-4">
      <ul class="flex gap-3 items-center max-[360px]:justify-center">
        <li class="text-slate-400 font-semibold">
          <router-link
            to="/host/dashboard"
            exactActiveClass="underline underline-offset-4 text-slate-200"
          >
            Dashboard
          </router-link>
        </li>
        <li class="text-slate-400 font-semibold">
          <router-link
            to="/host/income"
            exactActiveClass="underline underline-offset-4 text-slate-200"
          >
            Income
          </router-link>
        </li>
        <li class="text-slate-400 font-semibold">
          <router-link
            to="/host/vans"
            :class="{
              'underline underline-offset-4 text-slate-200':
                route.name.includes('HostVan'),
            }"
          >
            Vans
          </router-link>
        </li>
        <li class="text-slate-400 font-semibold">
          <router-link
            to="/host/reviews"
            exactActiveClass="underline underline-offset-4 text-slate-200"
          >
            Reviews
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";

  const route = useRoute();
</script>

<style lang="scss" scoped></style>
