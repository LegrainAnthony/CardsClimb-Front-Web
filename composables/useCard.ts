const revisionCards = ref(null as Array<object> | null);

export const useCard = () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTcxNDk5NjQ4OCwiZXhwIjoxNzE1MDAwMDg4LCJhdWQiOiJsb2NhbGhvc3Q6MzAwMCIsImlzcyI6ImxvY2FsaG9zdDozMDAwIn0.ivgkbVXd9CO1w56fbdaLrUSeDB5TKp-xPvuJo-HEs1w';

  const getRevision = async () => {
    const { data, pending, error, refresh } = await useFetch('user/revision', {
      baseURL: 'http://localhost:8080/cards',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!error.value) {
      revisionCards.value = data.value as Array<object>;
    }
    return { data, pending, error, refresh };
  };

  const getRevisionCardsLength = () => {
    return revisionCards.value?.length ?? null;
  };

  return { getRevisionCardsLength, getRevision };
};
