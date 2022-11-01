export const dragOver = (active, over) => {
  //   console.log(active, over);
  return {
    type: "DRAG_OVER",
    active,
    over,
  };
};

export const dragEnd = ({ active, over }) => {
  return {
    type: "DRAG_END",
    active,
    over,
  };
};
