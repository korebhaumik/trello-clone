export const dragOver = (active, over, boardIndex) => {
  //   console.log(active, over);
  return {
    type: "DRAG_OVER",
    active,
    over,
    boardIndex,
  };
};

export const dragEnd = ({ active, over, boardIndex }) => {
  return {
    type: "DRAG_END",
    active,
    over,
    boardIndex,
  };
};
