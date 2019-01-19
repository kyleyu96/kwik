const localStorageKey = "kwik";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(localStorageKey);

    if (!serializedState) return undefined;
    return serializedState;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const cleanState = state => {};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageKey, serializedState);
  } catch (err) {
    console.error(err);
  }
};
