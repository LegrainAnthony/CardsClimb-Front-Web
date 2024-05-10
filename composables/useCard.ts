const revisionCards = ref<Array<object> | null>();

export const useCard = () => {
  const getRevision = async () => {
    const { data, pending, error, refresh } = await useCardClimbApi<
      Array<object>
    >('http://localhost:8080/cards/user/revision-of-day', {});
    if (!error.value) {
      revisionCards.value = data.value;
    }
    return { data, pending, error, refresh };
  };

  const getRevisionCardsLength = () => {
    return revisionCards.value?.length ?? null;
  };

  return { getRevisionCardsLength, getRevision };
};
