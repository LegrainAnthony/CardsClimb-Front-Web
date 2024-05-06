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
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    ) {
      const { execute, data: tokens } = await refreshToken();
      await execute();

      console.log(to.path);

      if (tokens.value) {
        await fetchUser();
        return navigateTo(to.path);
      }
    }

    abortNavigation();
    return navigateTo("/login");
  }
});
