export interface Card {
  id: number;
  reference: string;
  question: string;
  answer?: string;
  last_revision?: Date;
  future_revision?: Date;
  box_id?: number;
  box_step_id?: number;
  card_type_id: number;
}

const revisionCards = ref<Array<object> | null>();

export const useCard = () => {
  const getRevision = () => {
    const { data, pending, error, status, refresh } = useCardClimbApi<
      Array<object>
    >('http://localhost:8080/cards/user/revision-of-day', {});

    return { data, pending, error, refresh, status };
  };

  const getCards = async () => {
    const { data, pending, error, execute } = await useCardClimbApi<
      Array<Card>
    >('http://localhost:8080/cards', {});

    return { data, pending, error, execute };
  };

  return { getCards, getRevision, revisionCards };
};
