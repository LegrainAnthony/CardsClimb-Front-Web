<script setup lang="ts">
import { object, string } from "yup";
import { useAuth } from "~/composables/useAuth";

definePageMeta({
  layout: "auth",
});

const email = ref<string>("");
const password = ref<string>("");

const { signin, storeTokens } = useAuth();
const { data, execute, error, status } = await signin(email, password);

const router = useRouter();

// Minimum eight characters, at least one letter, one number and one special character:
const passwordRegex = new RegExp(
  "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
);

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .matches(passwordRegex, {
      message:
        "Must contain at least one letter, one number and one special character",
    })
    .required("Required"),
});

const handleLogin = async () => {
  await execute();

  if (status.value === "success" && data.value) {
    storeTokens(data.value.accessToken, data.value.refreshToken);
    router.push("/");
  }
};
</script>

<template>
  <UCard class="p-6 max-w-sm w-full">
    <UForm :schema="schema" :state="{ email, password }" @submit="handleLogin">
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

        <h2 v-if="error" class="text-center text-red-500">
          {{ error.data.message }}
        </h2>
        <UButton block type="submit" @click="handleLogin">Continue</UButton>
        <p class="text-xs text-center">
          By signing in, you agree to our
          <NuxtLink to="/terms" class="text-blue-500"
            >Terms of Service.</NuxtLink
          >
        </p>
      </div>
    </UForm>
  </UCard>
</template>
