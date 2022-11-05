export const removeCard = (id, container, boardIndex) => {
  return { type: "REMOVE_CARD", boardIndex, id, name: container };
};
export const addCard = (title, container, boardIndex) => {
  return {
    type: "ADD_CARD",
    boardIndex,
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
