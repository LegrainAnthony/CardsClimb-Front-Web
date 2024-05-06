import { useAuth } from "~/composables/useAuth";
const { refreshToken } = useAuth();

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
      localStorage.getItem("accessToken")
    ) {
      const { execute, data: tokens } = await refreshToken();
      await execute();

      if (tokens.value) {
        await fetchUser();
        return navigateTo(to.path);
      }
    }

    abortNavigation();
    return navigateTo("/login");
  }
});
