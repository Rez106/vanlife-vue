<template>
  <div class="w-full p-4 flex flex-col gap-5 mb-5">
    <router-link
      :to="{ path: '/vans', query: { sort: sort ? sort : undefined } }"
      class="flex items-center gap-1 hover:underline underline-offset-4 text-slate-300 font-semibold"
    >
      <Icon icon="ep:back" />
      Back to {{ sort || "all" }} vans
    </router-link>
    <div class="w-full">
      <img
        :src="van?.image"
        class="rounded-lg shadow-lg mb-5 h-1/2"
        alt="van"
      />
      <div class="w-full flex flex-col gap-4">
        <h4
          :class="`w-fit font-semibold text-lg first-letter:uppercase py-2 px-6 rounded-md text-slate-200 ${van?.categoryColor}`"
        >
          {{ van?.category }}
        </h4>
        <h1 class="font-bold text-slate-200 text-3xl">
          {{ van?.name }}
        </h1>
        <h1 class="font-semibold text-orange-200 text-xl">
          ${{ van?.price }}/day
        </h1>
        <p
          class="font-sans text-justify leading-5 text-slate-300 font-semibold text-sm"
        >
          {{ van?.description }}
        </p>
        <router-link
          to="/vans"
          class="w-full text-center py-2 bg-orange-500 text-slate-200 font-semibold rounded-lg duration-150 hover:bg-orange-400"
        >
          Rent this van
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Icon } from "@iconify/vue/dist/iconify.js";
  import { onMounted, ref } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute();
  const router = useRouter();

  const sort = ref(route?.query?.sort || "");

  const van = ref(null);
  const loading = ref(false);
  const error = ref(null);

  async function fetchData() {
    error.value = null;
    van.value = null;
    loading.value = true;

    try {
      const response = await fetch("/data/vans.json", { method: "GET" });
      if (!response.ok) throw new Error("failed to fetch");
      const data = await response.json();
      const foundVan = data.vans.find(
        (van) => van.id.toString() === route?.params?.id
      );

      if (!foundVan)
        return router.push({
          name: "NotFound",
        });

      van.value = foundVan;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    fetchData();
  });
</script>

<style lang="scss" scoped></style>
