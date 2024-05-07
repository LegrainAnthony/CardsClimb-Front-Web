import { useAuth } from "~/composables/useAuth";
const { refreshToken, storeTokens } = useAuth();

export default defineNuxtRouteMiddleware(async (to) => {
  const { getCurrentUser } = useMe();
  const { data: current, error, execute: fetchUser } = await getCurrentUser();

  await fetchUser();
  if (current.value && to.path === "/login") {
    return navigateTo({ name: "home" });
  }

  if (!current.value && to.path !== "/login") {
    if (
      error.value &&
      error.value.statusCode === 401 &&
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    ) {
      const { data: tokens } = await refreshToken();

      if (tokens.value) {
        storeTokens(tokens.value.accessToken, tokens.value.refreshToken);
        await fetchUser();
        return navigateTo(to.path);
      }
    }

    abortNavigation();
    return navigateTo("/login");
  }
});
