<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

// La méthode t permet de récupérer la valeur associée en fonction de la langue (dossier locales)
const { t } = useI18n();

const schema = object({
  email: string().email(t("invalidEmail")).required(t("required")),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required(t("required")),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
