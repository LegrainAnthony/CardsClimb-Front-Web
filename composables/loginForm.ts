import { ref } from "vue";

export function useLoginForm() {
  const email = ref("");
  const password = ref("");

  const login = (emit: (event: string, payload: any) => void) => {
    emit("login", { email: email.value, password: password.value });
  };

  return {
    email,
    password,
    login,
  };
}
