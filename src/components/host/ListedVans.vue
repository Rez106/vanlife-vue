<template>
  <div class="w-full">
    <h1
      class="text-white text-2xl text-center font-bold"
      v-if="loading && !error"
    >
      Loading...
    </h1>
    <h1
      class="text-red-500 text-2xl text-center font-bold"
      v-if="error && !loading"
    >
      {{ error }}
    </h1>
    <div class="w-full flex items-center justify-between">
      <h1 class="font-semibold text-slate-200 text-2xl">Your listed vans</h1>
      <router-link
        v-if="$route.name !== 'HostVans'"
        to="/vans"
        class="text-slate-200 text-sm hover:underline underline-offset-2"
      >
        View all
      </router-link>
    </div>
    <div class="w-full flex flex-col gap-4 p-2 mt-5">
      <div
        v-for="van in vans"
        :key="van.id"
        class="w-full max-w-full flex items-center justify-between rounded-md bg-slate-700 p-2"
      >
        <img
          class="w-1/4 object-cover rounded-md"
          :src="van.image"
          alt="listed-van"
        />
        <div>
          <p class="font-semibold text-slate-200 text-xl">{{ van.name }}</p>
          <p class="font-semibold text-slate-300">${{ van.price }}/day</p>
        </div>
        <router-link
          :to="'/host/vans/' + van.id"
          class="text-slate-400 font-semibold pr-2 duration-150 hover:text-slate-200"
        >
          {{ $route.name === "HostVans" ? "Detail" : "Edit" }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const vans = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetchData() {
    error.value = null;
    vans.value = null;
    loading.value = true;

    try {
      const response = await fetch("/data/vans.json", { method: "GET" });
      if (!response.ok) throw new Error("failed to fetch");
      const data = await response.json();

      vans.value = data.listedVans;
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
