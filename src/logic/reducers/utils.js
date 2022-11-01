import { moveBetweenContainers, arrayMove, removeAtArray } from "../fnc";

export const utilsReducer = (state = {}, actions) => {
  switch (actions.type) {
    case "GET_DATA": {
      state = actions.payload.value;
      return state;
    }
    case "REMOVE_CARD": {
      const temp = state;
      const item = temp[actions.name].cards;
      const cardArr = item.filter((card) => {
        return card.id != actions.id;
      });

      temp[actions.name].cards = cardArr;

      state = temp;
      return {
        ...state,
        todo: {
          ...state.todo,
        },
        doing: {
          ...state.doing,
        },
        done: {
          ...state.done,
        },
      };
    }
    case "ADD_CARD": {
      const temp = state;
      const item = temp[actions.name].cards;
      const cardArr = [...item, actions.payload];

      temp[actions.name].cards = cardArr;

      state = temp;
      return {
        ...state,
        todo: {
          ...state.todo,
        },
        doing: {
          ...state.doing,
        },
        done: {
          ...state.done,
        },
      };
    }
    case "DRAG_OVER": {
      const overId = actions.over?.id;
      // console.log(actions.active);
      // console.log(actions.over);

      let temp = state;
      if (overId !== "delete") {
        if (!overId) {
          // console.log("hello");
          return {
            ...state,
            todo: {
              ...state.todo,
            },
            doing: {
              ...state.doing,
            },
            done: {
              ...state.done,
            },
          };
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
          state = moveBetweenContainers(
            temp,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            payload
          );

          // console.log(state);
          return {
            ...state,
            todo: {
              ...state.todo,
            },
            doing: {
              ...state.doing,
            },
            done: {
              ...state.done,
            },
          };
        }
      }
      return state;
    }
    case "DRAG_END": {
      let temp = state;
      if (!actions.over) {
        // setActiveID(null);
        return state;
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
            name: activeContainer,
            title: state[activeContainer].title,
            cards: removeAtArray(temp[activeContainer].cards, activeIndex),
          },
        };
        state = temp;
        return state;
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
          newItems = {
            ...temp,
            [overContainer]: {
              id: overContainer,
              name: overContainer,
              title: state[overContainer].title,
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
        state = newItems;
        return state;
      }
    }
    default: {
      return state;
    }
  }
};
export const cardsReducer = (state = {}, actions) => {
  switch (actions.type) {
    case "SHOW_CURRENT_CARD": {
      state = actions.payload.card;
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
