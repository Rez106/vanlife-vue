<template>
  <div class="w-full p-4">
    <h1 class="text-slate-200 text-4xl font-bold mb-3">Income</h1>
    <router-link to="/host/income" class="text-slate-400">
      Last
      <span class="underline underline-offset-2 font-semibold"> 30 days </span>
    </router-link>
    <p class="text-slate-200 font-bold text-3xl mt-5">$2,260</p>
    <Income />
    <div class="w-full mt-5">
      <div class="w-full flex justify-between items-center">
        <h1 class="text-xl font-semibold text-slate-200">
          Your transactions
          <span class="text-lg">({{ transactions.length }})</span>
        </h1>
        <router-link to="/host/income" class="text-slate-400 text-sm">
          Last
          <span class="underline underline-offset-2 font-semibold">
            30 days
          </span>
        </router-link>
      </div>
      <div class="w-full flex flex-col items-center gap-5 mt-5">
        <div
          v-for="item in transactions"
          :key="item.id"
          class="w-11/12 flex items-center justify-between bg-slate-600 py-5 px-3 rounded-lg"
        >
          <span class="text-slate-200 text-2xl font-bold">
            {{ item.amount }}$
          </span>
          <span class="text-slate-200 text-sm font-semibold">
            {{ item.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Income from "../chart/Income.vue";

  const transactions = [
    { id: 1, amount: 720, date: "1/12/22" },
    { id: 2, amount: 560, date: "10/11/22" },
    { id: 3, amount: 980, date: "23/11/22" },
  ];
</script>

<style lang="scss" scoped></style>
