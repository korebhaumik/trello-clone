import { arrayMove as dndKitArrayMove } from "@dnd-kit/sortable";

export const removeAtArray = (array, index) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertAtArray = (array, index, item) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

export const arrayMove = (array, oldIndex, newIndex) => {
  return dndKitArrayMove(array, oldIndex, newIndex);
};

export const moveBetweenContainers = (
  state,
  activeContainer,
  activeIndex,
  overContainer,
  overIndex,
  payload
) => {
  // console.log(insertAtArray(items[overContainer], overIndex, item));
  //   console.log(payload);
  return {
    ...state,
    [activeContainer]: {
      id: activeContainer,
      name: activeContainer,
      title: state[activeContainer].title,
      cards: removeAtArray(state[activeContainer].cards, activeIndex),
    },

    [overContainer]: {
      id: overContainer,
      name: overContainer,
      title: state[overContainer].title,
      cards: insertAtArray(state[overContainer].cards, overIndex, payload),
    },
  };
};
