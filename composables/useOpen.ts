export const useOpen = () => {
  const state = ref(false);

  const getState = () => {
    return state.value;
  };
  const open = () => {
    state.value = true;
  };
  const close = () => {
    state.value = false;
  };

  return { open, close, getState };
};
