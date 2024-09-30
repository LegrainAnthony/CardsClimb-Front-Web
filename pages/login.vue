<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";
import { loginSchema } from "~/validation"
import { useForm } from 'vee-validate';
import { watch } from 'vue'

const {  values, errors, defineField } = useForm({ validationSchema: loginSchema,});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
definePageMeta({
  layout: "auth",
});

const { signin, storeTokens } = useAuth();
const { data, execute, error, status } = await signin(email, password);

const router = useRouter();

const handleLogin = async () => {
  await execute();

  if (status.value === "success" && data.value) {
    storeTokens(data.value.accessToken, data.value.refreshToken);
    router.push("/");
  }
};

watch(email, () => {
    console.log(errors);
    console.log(values);
})
 


</script>

<template>
  <UCard class="p-6 max-w-sm w-full">
    <UForm :schema="loginSchema" :state="{ email, password }" @submit="handleLogin">
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
            v-bind="emailAttrs"
            :color="errors.email ? 'red' : 'primary'"
            :icon="errors.email ? 'i-heroicons-academic-cap' : undefined "
          />
          <UInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            v-model="password"
            v-bind="passwordAttrs"
            :color="errors.password ? 'red' : 'primary'"
          />
        </div>
        <p>{{ errors.password }}</p>
        <!-- <h2 v-if="error" class="text-center text-red-500">
          {{ error.data.message }}
        </h2> -->
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
