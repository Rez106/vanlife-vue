<template>
  <div>
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
    <div class="w-full" v-if="vans">
      <h1 class="text-orange-200 text-2xl font-bold mb-3 p-4">
        Explore our vans options
      </h1>

      <div class="w-full p-4">
        <ul class="flex items-center gap-2">
          <li>
            <router-link
              :to="{ query: { sort: 'simple' } }"
              @click="onSortClickHandler('simple')"
              :class="[
                'py-2 px-3 rounded-lg font-semibold duration-200 hover:bg-opacity-80',
                {
                  'bg-orange-500 text-white': isSortingSimple,
                  'bg-slate-200': !isSortingSimple,
                },
              ]"
            >
              Simple
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ query: { sort: 'luxury' } }"
              @click="onSortClickHandler('luxury')"
              :class="[
                'py-2 px-3 rounded-lg font-semibold duration-200 hover:bg-opacity-80',
                {
                  'bg-black text-white': isSortingLuxury,
                  'bg-slate-200': !isSortingLuxury,
                },
              ]"
            >
              Luxury
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ query: { sort: 'rugged' } }"
              @click="onSortClickHandler('rugged')"
              :class="[
                'py-2 px-3 rounded-lg font-semibold duration-200 hover:bg-opacity-80',
                {
                  'bg-emerald-700 text-white': isSortingRugged,
                  'bg-slate-200': !isSortingRugged,
                },
              ]"
            >
              Rugged
            </router-link>
          </li>
          <li v-if="isSorting" class="ml-auto text-sm text-slate-300">
            <button @click="onClearFilters" class="hover:border-b">
              Clear filters
            </button>
          </li>
        </ul>
      </div>

      <div class="w-full grid grid-cols-2 gap-x-2 gap-y-10 px-2 py-10">
        <van v-for="van in vans" :key="van.id" :van="van" :sort="isSorting" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Van from "../components/vans/Van.vue";
  import { onMounted, ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute();
  const router = useRouter();

  const isSortingSimple = ref(false);
  const isSortingLuxury = ref(false);
  const isSortingRugged = ref(false);
  const isSorting = ref(null);

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
      if (isSorting.value) {
        return (vans.value = data.vans.filter(
          (van) => van.category === isSorting.value
        ));
      }

      vans.value = data.vans;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    isSortingSimple.value = route?.query?.sort === "simple";
    isSortingLuxury.value = route?.query?.sort === "luxury";
    isSortingRugged.value = route?.query?.sort === "rugged";
    isSorting.value = route?.query?.sort;
    fetchData();
  });

  const onSortClickHandler = (sortType) => {
    isSortingSimple.value = sortType === "simple";
    isSortingLuxury.value = sortType === "luxury";
    isSortingRugged.value = sortType === "rugged";
    isSorting.value = sortType;
  };

  const onClearFilters = () => {
    isSortingSimple.value = false;
    isSortingLuxury.value = false;
    isSortingRugged.value = false;
    isSorting.value = null;
    router.push({ query: null });
  };

  watch(
    () => route.query,
    () => {
      fetchData();
    },
    { immediate: true }
  );
</script>

<style lang="scss" scoped></style>
