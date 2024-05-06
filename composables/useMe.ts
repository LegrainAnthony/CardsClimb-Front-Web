export function useMe() {
  const getCurrentUser = async () => {
    const { data, error, status, execute } = useCardClimbApi(
      `http://localhost:8080${AUTHENTICATION_CURRENT_API_URL}`,
      {
        immediate: false,
        method: "GET",
        watch: false,
      },
    );

    return { data, error, status, execute };
  };

  return { getCurrentUser };
}
