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

export interface createCard {
  reference: string;
  question: string;
  answer?: string;
  box_id?: number;
  box_step_id?: number;
  cardTypeId: number;
  tags?: Array<number>;
}

export interface CardType {
  id: number;
  name: string;
}

export const useCard = () => {
  const getRevision = async () => {
    const { data, pending, error, status, refresh } = await useCardClimbApi<
      Array<Card>
    >('http://localhost:8080/cards/user/revision-of-day', {
      immediate: true,
      method: 'GET',
    });

    return { data, pending, error, refresh, status };
  };

  const getCards = async () => {
    const { data, pending, error, execute } = await useCardClimbApi<
      Array<Card>
    >('http://localhost:8080/cards', {
      immediate: true,
      method: 'GET',
    });

    return { data, pending, error, execute };
  };

  const validateCard = async (id: number, payload: string) => {
    const response = await $fetch<Card>(
      `http://localhost:8080/cards/validate/${id}`,
      {
        method: 'PATCH',
        body: { status: payload },
        headers: {
          'Content-Type': 'application/json',
        },
        onRequest: ({ options }) => {
          const headers = new Headers(options.headers);

          const token = localStorage.getItem('accessToken');
          if (!token) return;

          headers.set('Authorization', `Bearer ${token}`);
          headers.set(
            'RefreshToken',
            `Bearer ${localStorage.getItem('refreshToken')}`
          );

          options.headers = headers;
        },
      }
    );
    return response;
  };

  const createCard = async (payload: createCard) => {
   const { data, pending, error, execute } = await useCardClimbApi<Card>(
      'http://localhost:8080/cards',
      {
        immediate: true,
        method: 'POST',
        body: payload,
      }
    );

    return { data, pending, error, execute };   
  } 

  const getCardsType = async () => {
    const response = await $fetch(
      `http://localhost:8080/card-type`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response || [] as Array<CardType>;
  };

  return { getCards, getRevision, validateCard, createCard, getCardsType };
};
