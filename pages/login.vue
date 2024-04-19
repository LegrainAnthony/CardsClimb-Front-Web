<script setup lang="ts">
import { definePageMeta } from "#imports";
import { useLoginForm } from "@/composables/loginForm";

definePageMeta({
  layout: "auth",
});

const { email, password, login } = useLoginForm();
const emit = defineEmits(["login"]);

const handleLogin = () => {
  login(emit);
};
</script>

<template>
  <UCard class="mt-12 max-w-sm w-full">
    <div class="flex flex-col space-y-6 items-center">
      <div class="text-center">
        <h2 class="text-lg">Welcome back!</h2>
        <p>
          Don’t have an account?
          <NuxtLink to="/signup" class="text-blue-500">Sign up.</NuxtLink>
        </p>
      </div>
      <div class="space-y-4 w-full">
        <UInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          v-model="email"
        />
        <UInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          v-model="password"
        />
      </div>
      <!-- <NuxtLink
        to="/forgot-password"
        class="self-end mb-4 text-sm text-blue-500"
        >Forgot password?</NuxtLink
      > -->
      <UButton block class="" @click="handleLogin">Continue</UButton>
      <p class="text-xs text-center">
        By signing in, you agree to our
        <NuxtLink to="/terms" class="text-blue-500">Terms of Service.</NuxtLink>
      </p>
    </div>
  </UCard>
</template>

<style scoped></style>
