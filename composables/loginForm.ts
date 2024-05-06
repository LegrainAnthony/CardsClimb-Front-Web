import { ref } from "vue";
import { useForm, useField, defineRule, ErrorMessage } from "vee-validate";
// import { required, email, min } from "@vee-validate/rules";
import { useNuxtApp } from "#app";

// defineRule("required", required);
// defineRule("email", email);
// defineRule("min", min);

export function useLoginForm() {
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

      errors.value = "Une erreur s'est produite. Veuillez réessayer.";
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
