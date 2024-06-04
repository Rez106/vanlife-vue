<template>
  <div class="w-full p-4">
    <router-link
      to="/host/vans"
      class="flex items-center text-slate-300 hover:underline underline-offset-2"
    >
      <span class="mr-1">
        <Icon icon="ep:back" />
      </span>
      <span>Back to all vans</span>
    </router-link>
    <div class="w-full bg-slate-600 p-2 mt-10 rounded-md">
      <div class="w-full flex items-center gap-5">
        <img class="w-2/4 rounded-md" :src="van?.image" alt="van-image" />
        <div class="w-1/3 flex flex-col gap-1">
          <p
            :class="`w-fit first-letter:uppercase font-semibold py-1 px-4 ${van?.categoryColor} rounded-lg text-sm text-slate-200`"
          >
            {{ van?.category }}
          </p>
          <p class="font-bold text-slate-200 text-xl">
            {{ van?.name }}
          </p>
          <p class="text-slate-200">
            <span class="font-semibold text-lg">${{ van?.price }}</span>
            /day
          </p>
        </div>
      </div>
      <div class="w-full mt-5 p-2">
        <nav class="flex items-center gap-3">
          <router-link
            exactActiveClass="underline underline-offset-2 text-slate-200"
            :to="'/host/vans/' + van?.id"
          >
            <span class="text-lg font-semibold">Details</span>
          </router-link>
          <router-link
            exactActiveClass="underline underline-offset-2 text-slate-200"
            :to="'/host/vans/' + van?.id + '/pricing'"
          >
            <span class="text-lg font-semibold">Pricing</span>
          </router-link>
          <router-link
            exactActiveClass="underline underline-offset-2 text-slate-200"
            :to="'/host/vans/' + van?.id + '/photos'"
          >
            <span class="text-lg font-semibold">Photos</span>
          </router-link>
        </nav>
      </div>
      <div class="w-full p-2">
        <div
          v-if="route.path === '/host/vans/' + van?.id"
          class="w-full flex flex-col gap-2"
        >
          <p class="text-slate-300">
            <span class="font-semibold text-lg text-slate-200"> Name: </span>
            {{ van?.name }}
          </p>
          <p class="text-slate-300">
            <span class="font-semibold text-lg text-slate-200">
              Category:
            </span>
            {{ van?.category.charAt(0).toUpperCase() + van?.category.slice(1) }}
          </p>
          <p class="text-slate-300 leading-5 text-justify">
            <span class="font-semibold text-lg text-slate-200">
              Description:
            </span>
            {{ van?.description }}
          </p>
          <p class="text-slate-300">
            <span class="font-semibold text-lg text-slate-200">
              Visibility:
            </span>
            Public
          </p>
        </div>
        <router-view v-else v-slot="{ Component }">
          <component :is="Component" :foundVan="van" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Icon } from "@iconify/vue/dist/iconify.js";
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute();
  const router = useRouter();

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
      const foundVan = data.listedVans.find(
        (van) => van.id.toString() === route?.params?.id
      );

      if (!van)
        return router.push({
          name: "NotFound",
        });
      return (van.value = foundVan);
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
