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

export const useCard = () => {
  const getCards = async () => {
    const { data, pending, error, execute } = await useCardClimbApi<
      Array<Card>
    >('http://localhost:8080/cards', {});

    return { data, pending, error, execute };
  };

  return { getCards };
};
