interface User {
  id: number;
  email: string;
  username: string;
}

const user = ref<User | null>();

export function useMe() {
  const getCurrentUser = async () => {
    const { data, error, status, execute } = useCardClimbApi<User>(
      `http://localhost:8080${AUTHENTICATION_CURRENT_API_URL}`,
      {
        immediate: false,
        method: 'GET',
        watch: false,
      }
    );
    watch(status, (value) => {
      if (value === 'success') {
        user.value = data.value;
      }
    });
    return { data, error, status, execute };
  };

  return { getCurrentUser, user };
}
