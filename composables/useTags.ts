interface Tag {
    id: number;
    name: string;
    user_id: number;
}

export const useTags = () => {
    const getTags = async () => {
        const { data, pending, error, execute } = await useCardClimbApi<Array<Tag>>(
            'http://localhost:8080/tags',
            {}
        );
        return { data, pending, error, execute };
        }
    return { getTags };
};
  