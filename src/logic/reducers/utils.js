import { moveBetweenContainers, arrayMove, removeAtArray } from "../fnc";

export const utilsReducer = (state = [], actions) => {
  switch (actions.type) {
    case "GET_DATA": {
      state = actions.payload.value;
      return state;
    }
    case "SET_DATA": {
      state = actions.payload.value;
      return state;
    }
    case "REMOVE_CARD": {
      const temp = state;
      const transitItem = temp[actions.boardIndex];
      const item = transitItem[actions.name].cards;
      const cardArr = item.filter((card) => {
        return card.id != actions.id;
      });

      transitItem[actions.name].cards = cardArr;

      state = temp;
      return [...state];
      return [
        ...state,
        {
          name: state[actions.boardIndex].name,
          data: state[actions.boardIndex].data,
        },
        // todo: {
        //   ...state.todo,
        // },
        // doing: {
        //   ...state.doing,
        // },
        // done: {
        //   ...state.done,
        // },
      ];
    }
    case "ADD_CARD": {
      const temp = state;
      const transitItem = temp[actions.boardIndex].data;
      const item = transitItem[actions.name].cards;
      const cardArr = [...item, actions.payload];

      console.log("container: ", transitItem[actions.name]);
      console.log("cardArr: ", cardArr);

      transitItem[actions.name].cards = cardArr;

      state = temp;
      return [...state];
      return [
        ...state,
        {
          name: state[actions.boardIndex].name,
          data: state[actions.boardIndex].data,
        },
      ];
      // return {
      //   ...state,
      //   todo: {
      //     ...state.todo,
      //   },
      //   doing: {
      //     ...state.doing,
      //   },
      //   done: {
      //     ...state.done,
      //   },
      // };
    }
    case "DRAG_OVER": {
      const overId = actions.over?.id;
      // console.log(actions.active);
      // console.log(actions.over);
      let transitData = state;
      let temp = state[actions.boardIndex].data;
      if (overId !== "delete") {
        if (!overId) {
          // console.log("hello");
          return state;
        }

        const activeContainer =
          actions.active.data.current.sortable.containerId;
        // console.log(activeContainer);
        // console.log(actions.over);
        const overContainer =
          actions.over.data.current?.sortable.containerId || actions.over.id;
        // console.log(overContainer);

        if (activeContainer !== overContainer) {
          const activeIndex = actions.active.data.current.sortable.index;
          // console.log(activeIndex);

          // const activeIndex = active.data.current.sortable.index;
          const overIndex =
            actions.over.id in temp
              ? temp[overContainer].length + 1
              : actions.over.data.current.sortable.index;
          // console.log(overIndex);
          // console.log(temp[activeContainer]);
          const k = temp[activeContainer].cards;
          // console.log(k[activeIndex]);
          const payload = k[activeIndex];
          const data = moveBetweenContainers(
            temp,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            payload
          );

          // console.log(data);
          transitData[actions.boardIndex].data = data;
          state = transitData;
          return [...state];
        }
      }
      return state;
    }

    case "DRAG_END": {
      let transitData = state;
      let temp = state[actions.boardIndex].data;
      if (!actions.over) {
        // setActiveID(null);
        return { ...state };
      }
      if (actions.over.id == "delete") {
        // setActiveID(null);
        // console.log(active, over);
        const activeContainer =
          actions.active.data.current.sortable.containerId;
        const activeIndex = actions.active.data.current.sortable.index;

        temp = {
          ...temp,
          [activeContainer]: {
            id: activeContainer,
            cards: removeAtArray(temp[activeContainer].cards, activeIndex),
          },
        };
        transitData[actions.boardIndex].data = temp;
        state = transitData;
        return [...state];
        // return [
        //   ...state,
        //   {
        //     name: state[actions.boardIndex].name,
        //     data: { ...state[actions.boardIndex].data },
        //   },
        // ];
      }
      if (actions.active.id !== actions.over.id) {
        const activeContainer =
          actions.active.data.current.sortable.containerId;
        const overContainer =
          actions.over.data.current?.sortable.containerId || actions.over.id;
        const activeIndex = actions.active.data.current.sortable.index;
        const overIndex =
          actions.over.id in temp
            ? temp[overContainer].length + 1
            : actions.over.data.current.sortable.index;

        //flfssfj

        let newItems;
        if (activeContainer === overContainer) {
          // console.log(temp);
          newItems = {
            ...temp,
            [overContainer]: {
              id: overContainer,
              cards: arrayMove(
                temp[overContainer].cards,
                activeIndex,
                overIndex
              ),
            },
          };
        } else {
          const k = temp[activeContainer].cards;
          // console.log(k[activeIndex]);
          const payload = k[activeIndex];
          // const payload = temp[activeContainer][activeIndex];
          newItems = moveBetweenContainers(
            temp,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            payload
          );
        }
        // state = newItems;

        transitData[actions.boardIndex].data = newItems;
        // state = transitData;
        return [...state];
      }
      return [...state];
    }
    case "ADD_NEW_BOARD": {
      // console.log(skeletonData);
      state = [
        ...state,
        {
          name: `Board ${actions.payload.value}`,
          id: Math.random(),
          data: {
            Todo: {
              id: "Todo",
              cards: [],
            },
            Doing: {
              id: "Doing",
              cards: [],
            },
            Done: {
              id: "Done",
              cards: [],
            },
          },
        },
      ];
      return state;
    }
    case "REMOVE_BOARD": {
      state = state.filter((board) => {
        return board.id !== actions.payload.id;
      });
      return [...state];
    }
    case "UPDATE_BOARD_NAME": {
      let transitData = state;
      transitData[actions.payload.index].name = actions.payload.value;
      return [...transitData];
    }
    default: {
      return state;
    }
  }
};

export const boardIndexReducer = (state = 0, actions) => {
  switch (actions.type) {
    case "SET_BOARD_INDEX": {
      return state;
    }
    case "UPDATE_BOARD_INDEX": {
      state = actions.payload.index;
      return state;
    }

    default: {
      return state;
    }
  }
};

export const showReducer = (state = false, actions) => {
  switch (actions.type) {
    case "SHOW": {
      return !state;
    }
    default: {
      return state;
    }
  }
};
