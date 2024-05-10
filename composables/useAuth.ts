export function useAuth() {
  const signup = async () => {};

  const signin = async (
    email: Ref<string | undefined>,
    password: Ref<string | undefined>
  ) => {
    const { data, error, status, execute } = useCardClimbApi<{
      accessToken: string;
      refreshToken: string;
    }>(`http://localhost:8080${AUTHENTICATION_LOGIN_API_URL}`, {
      immediate: false,
      method: "POST",
      body: { email, password },
      watch: false,
    });

    return { data, error, status, execute };
  };

  const signout = async () => {
    const { data, error, status } = await useCardClimbApi(
      `http://localhost:8080${AUTHENTICATION_LOGOUT_API_URL}`,
      {
        immediate: true,
        method: "POST",
        watch: false,
      }
    );

    return { data, error, status };
  };

  const refreshToken = async () => {
    const rft = localStorage.getItem("refreshToken");

    const { data, error } = await useCardClimbApi<{
      accessToken: string;
      refreshToken: string;
    }>(`http://localhost:8080${AUTHENTICATION_REFRESH_API_URL}`, {
      immediate: true,
      method: "POST",
      body: { refreshToken: rft },
      watch: false,
    });

    return { data, error };
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("accessToken");
    return Boolean(token);
  };

  const storeTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  return {
    signup,
    signin,
    signout,
    refreshToken,
    storeTokens,
    isAuthenticated,
  };
}
