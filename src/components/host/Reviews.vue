<template>
  <div class="w-full p-4">
    <div class="w-full flex items-center gap-5">
      <p class="text-2xl font-bold text-slate-200">Your reviews</p>
      <router-link class="text-lg text-slate-300">
        Last <span class="underline underline-offset-2">30 days</span>
      </router-link>
    </div>
    <Review />
    <div class="w-full mt-5">
      <h1 class="text-xl font-semibold text-slate-200">
        Reviews <span class="text-lg">({{ reviews.length }})</span>
      </h1>
      <div class="w-full flex flex-col gap-6 mt-5">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="w-full border-b border-slate-600 pb-4"
        >
          <p class="">{{ review.starsCount === 5 && "⭐⭐⭐⭐⭐" }}</p>
          <p class="flex items-center gap-2">
            <span class="text-xl font-semibold text-slate-200">
              {{ review.writer }}
            </span>
            <span class="text-sm text-slate-500">{{ review.date }}</span>
          </p>
          <p class="text-slate-300">{{ review.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Review from "../chart/Review.vue";

  const reviews = [
    {
      id: 1,
      writer: "Elliot",
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio atque ea dolores est sit saepe impedit natus fugiat laborum perferendis.",
      date: new Date(2022, 11, 21).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      starsCount: 5,
    },
    {
      id: 2,
      writer: "Sandy",
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio atque ea dolores est sit saepe impedit natus fugiat laborum perferendis dasdasd jhuytruu dsaddfpop ujdknvmcbvm.",
      date: new Date(2021, 10, 10).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      starsCount: 5,
    },
  ];
</script>

<style lang="scss" scoped></style>
