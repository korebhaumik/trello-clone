export const removeCard = (id, container) => {
  return { type: "REMOVE_CARD", id, name: container };
};
export const addCard = (title, container) => {
  return {
    type: "ADD_CARD",
    name: container,
    payload: {
      id: Math.random(),
      title,
      priority: "none",
      description: "",
      color: "rgba(217, 217, 217, 0.04)",
    },
  };
};

export const showCurrentCard = (card) => {
  return { type: "SHOW_CURRENT_CARD", payload: { card } };
};
