<template>
  <div class="w-full text-center">
    <h1 class="text-slate-300 text-3xl font-semibold mb-5">
      <u class="underline-offset-4 text-slate-100">Sign in</u> to your account
    </h1>
    <p
      v-if="route?.query?.redirectedFrom"
      class="w-fit mx-auto first-letter:uppercase mb-5 text-xl font-semibold text-slate-200 bg-red-500 rounded-xl py-2 px-4"
    >
      You must be logged in!
    </p>
    <form @submit.prevent="onSubmitLoginHandler" class="mx-auto 2xl:w-3/4">
      <p
        v-if="error"
        class="w-full text-center text-lg font-semibold mb-2 text-red-500 rounded-md"
      >
        *{{ error }}
      </p>
      <input
        v-model="email"
        type="text"
        id="emailInput"
        class="w-full rounded-t-md outline-none px-4 py-2 border-y-2 border-x-4 text-lg font-semibold border-slate-800 focus:border-l-orange-400 focus:border-r-orange-400 duration-200"
        placeholder="E-mail"
      />
      <div class="relative w-full">
        <input
          v-model="password"
          :type="showPass ? 'text' : 'password'"
          id="passwordInput"
          class="w-full rounded-b-md outline-none px-4 py-2 border-y-2 border-x-4 text-lg font-semibold border-slate-800 focus:border-l-orange-400 focus:border-r-orange-400 duration-200"
          placeholder="Password"
        />
        <button
          type="button"
          @click="togglePassword"
          class="text-xl absolute right-3 top-1/2 -translate-y-1/2"
        >
          <Icon
            :icon="showPass ? 'mdi:eye-outline' : 'mdi:eye-off-outline'"
            style="color: black"
          />
        </button>
      </div>
      <button
        class="w-full mt-8 py-2 px-4 outline outline-2 outline-orange-400 bg-orange-400 text-xl font-semibold text-slate-100 rounded-md duration-200 hover:bg-orange-500 hover:outline-orange-500 hover:outline-offset-4"
      >
        Log in
      </button>
    </form>
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { Icon } from "@iconify/vue";

  const router = useRouter();
  const route = useRoute();
  const email = ref("");
  const password = ref("");
  const showPass = ref(false);
  const error = ref(null);
  const redirected = ref(false);

  const onSubmitLoginHandler = () => {
    if (!email.value.includes("@") || password.value.length < 3) {
      error.value = "Wrong Email or Password";
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    error.value = null;
    email.value = "";
    password.value = "";

    router.push({ name: "Host" });
  };

  const togglePassword = () => {
    showPass.value = !showPass.value;
  };

  watch(route.query, (newVal) => {
    if (newVal?.redirectedFrom) {
      return (redirected.value = true);
    }
  });
</script>

<style scoped>
  /* Add any custom styles here */
</style>
