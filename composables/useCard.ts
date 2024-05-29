const revisionCards = ref<Array<object> | null>();

export const useCard = () => {
  const getRevision = () => {
    const { data, pending, error, status, refresh } = useCardClimbApi<
      Array<object>
    >("http://localhost:8080/cards/user/revision-of-day", {});

    return { data, pending, error, refresh, status };
  };

  return { getRevision, revisionCards };
};
