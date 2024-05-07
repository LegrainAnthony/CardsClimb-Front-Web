export interface Box {
  id: number;
  name: string;
  box_steps?: Array<Step>;
}

export interface Step {
  id: number;
  interval: number;
  order: number;
}

export const useBox = () => {
  const getBoxes = async () => {
    const { data, pending, error, execute } = await useCardClimbApi<Array<Box>>(
      'http://localhost:8080/boxes',
      {}
    );
    return { data, pending, error, execute };
  };

  const getBoxWithSteps = async (id: number) => {
    const { data, pending, error, execute } = await useCardClimbApi<Box>(
      `http://localhost:8080/boxes/test/${id}`,
      {}
    );
    return { data, pending, error, execute };
  };

  return { getBoxes, getBoxWithSteps };
};
