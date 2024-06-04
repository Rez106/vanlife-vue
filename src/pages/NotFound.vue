<template>
  <div class="flex flex-col gap-8 items-center mt-20 p-4">
    <img class="w-1/2" src="/images/404.svg" alt="not-found" />
    <p class="text-white font-semibold text-2xl text-center">
      Sorry, the page you're looking for is
      <span class="text-red-500 font-bold text-4xl">Not Found!</span>
    </p>
    <router-link
      to="/"
      class="w-full text-center text-xl rounded-xl py-3 px-6 bg-slate-600 text-white font-semibold duration-200 hover:bg-slate-700"
    >
      Return to home
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
