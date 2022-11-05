export const updateBoardIndex = (index) => {
  return {
    type: "UPDATE_BOARD_INDEX",
    payload: {
      index,
    },
  };
};

export const updateBoardName = (value, index) => {
  return {
    type: "UPDATE_BOARD_NAME",
    payload: {
      value,
      index,
    },
  };
};

export const addNewBoard = (value) => {
  return {
    type: "ADD_NEW_BOARD",
    payload: {
      value: value + 1,
    },
  };
};
export const removeBoard = (id, index, allBoards, boardIndex) => {
  return {
    type: "REMOVE_BOARD",
    payload: {
      id,
      currentId: allBoards[boardIndex].id,
      currentIndex: index,
      boardIndex,
    },
  };
};
