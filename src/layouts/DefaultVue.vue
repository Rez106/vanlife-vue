<template>
  <div class="min-h-screen bg-gradient-to-tr from-slate-800 to-gray-900">
    <div class="w-full md:w-1/2 xl:w-1/3 2xl:w-[30%] mx-auto">
      <header
        class="w-full p-4 flex gap-1 max-[400px]:flex-col max-[400px]:items-center max-[400px]:gap-2-"
      >
        <img src="/images/van.svg" alt="van logo" class="w-1/12" />
        <div class="w-1/2 flex items-center max-[400px]:justify-center">
          <router-link
            to="/"
            class="text-3xl max-[400px]:text-center text-orange-200 font-mono font-bold"
          >
            VANLIFE
          </router-link>
        </div>
        <nav class="w-1/2 flex items-center">
          <ul
            class="w-full flex items-center max-[400px]:justify-center justify-end gap-5 text-lg font-semibold text-slate-400"
          >
            <li class="duration-200 hover:cursor-pointer hover:text-slate-200">
              <router-link
                to="/host"
                :class="{
                  'text-slate-200 border-b-2': $route?.path?.includes('/host'),
                }"
              >
                Host
              </router-link>
            </li>
            <li class="duration-200 hover:cursor-pointer hover:text-slate-200">
              <router-link
                to="/about"
                :class="{
                  'text-slate-200 border-b-2': $route.path === '/about',
                }"
              >
                About
              </router-link>
            </li>
            <li class="duration-200 hover:cursor-pointer hover:text-slate-200">
              <router-link
                to="/vans"
                :class="{
                  'text-slate-200 border-b-2': $route.path === '/vans',
                }"
              >
                Vans
              </router-link>
            </li>
            <li class="duration-200 hover:cursor-pointer hover:text-slate-200">
              <router-link
                to="/login"
                :class="{
                  'text-slate-200 border-b-2': $route.path === '/login',
                }"
              >
                <Icon
                  icon="mingcute:user-4-line"
                  width="1.2em"
                  height="1.2em"
                />
              </router-link>
            </li>
          </ul>
        </nav>
      </header>
      <main class="w-full min-h-[86.5vh]">
        <router-view :key="$route.path" />
      </main>
      <footer class="p-4 w-full bg-slate-950">
        <h1 class="text-slate-300 font-semibold text-center">©2023 #VANLIFE</h1>
      </footer>
    </div>
  </div>
</template>

<script setup>
  import { Icon } from "@iconify/vue/dist/iconify.js";
</script>

<style scoped></style>
