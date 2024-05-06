export function useAuth() {
  const signup = async () => {};

  const signin = async (
    email: Ref<string | undefined>,
    password: Ref<string | undefined>
  ) => {
    const router = useRouter();
    const { data, error, status, execute } = useCardClimbApi<{
      accessToken: string;
      refreshToken: string;
    }>(`http://localhost:8080${AUTHENTICATION_LOGIN_API_URL}`, {
      immediate: false,
      method: "POST",
      body: { email, password },
      watch: false,
    });

    watch(status, () => {
      if (status.value === "success" && data.value) {
        storeTokens(data.value.accessToken, data.value.refreshToken);
        router.push("/");
      }
    });

    return { data, error, status, execute };
  };

  const refreshToken = async () => {
    const rft = localStorage.getItem("refreshToken");

    const { data, error, execute } = await useCardClimbApi<{
      accessToken: string;
      refreshToken: string;
    }>(`http://localhost:8080${AUTHENTICATION_REFRESH_API_URL}`, {
      immediate: false,
      method: "POST",
      body: { refreshToken: rft },
      watch: false,
    });

    watch(data, () => {
      if (data.value) {
        storeTokens(data.value.accessToken, data.value.refreshToken);
      }
    });

    return { data, error, execute };
  };

  const storeTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  return { signup, signin, refreshToken };
}
