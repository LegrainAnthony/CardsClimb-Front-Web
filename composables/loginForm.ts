import { ref } from "vue";
import { useForm, useField, defineRule, ErrorMessage } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { useNuxtApp } from "#app";

export function useLoginForm() {
  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);

  const { handleSubmit, isSubmitting, errors } = useForm();

  const { value: email, errorMessage: emailError } = useField(
    "email",
    "required|email"
  );
  const { value: password, errorMessage: passwordError } = useField(
    "password",
    "required|min:6"
  );

  const { $axios } = useNuxtApp();

  const submitForm = handleSubmit(async (values) => {
    try {
      const response = await $axios.$post("/api/login", values);
    } catch (e) {
      console.error(e);
    }
  });

  return {
    email,
    password,
    submitForm,
    isSubmitting,
    emailError,
    passwordError,
    errors,
  };
}
