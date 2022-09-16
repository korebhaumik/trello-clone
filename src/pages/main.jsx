import React from "react";
import List from "./list";
import data from "../utils/store.js";
import StoreApi from "../utils/storeApi.js";
import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Navbar from "../components/navbar.js";
export default function Main() {
  const [list, setList] = useState(data);
  const [cardy, setCardy] = useState(data.todo.cards);

  const addMoreCard = (title, specific) => {
    const newCard = {
      id: Math.random(),
      title,
      description: "",
      priority: null,
    };
    specific.cards = [...specific.cards, newCard];
    console.log(list);
  };
  const addSubData = (value, card, specific, aid) => {
    let description = value;
    card = { ...card, description };

    // const newarr = data[specific.name].cards.map((item) => {
    //   if (item.id === card.id) {
    //     item = card;
    //   }
    //   return item;
    // });

    data[specific.name].cards[aid].description = card.description;
    // console.log(list);
  };
  const addSubPrio = (value, card, specific, clr, aid) => {
    let priority = value;
    let color = clr;
    card = { ...card, priority, color };

    // const newarr = data[specific.name].cards.map((item) => {
    //   if (item.id === card.id) {
    //     item = card;
    //   }
    //   return item;
    // });

    data[specific.name].cards[aid].priority = card.priority;
    data[specific.name].cards[aid].color = card.color;
    console.log(list);
  };

  const addSubDate = (value, card, specific, aid) => {
    let date = value;
    card = { ...card, date };
    // const newarr = data[specific.name].cards.map((item) => {
    //   if (item.id === card.id) {
    //     item = card;
    //   }
    //   return item;
    // });
    data[specific.name].cards[aid].date = card.date;
    console.log(list);
  };

  const addSubTime = (value, card, specific, aid) => {
    let time = value;
    card = { ...card, time };
    // const newarr = data[specific.name].cards.map((item) => {
    //   if (item.id === card.id) {
    //     item = card;
    //   }
    //   return item;
    // });
    data[specific.name].cards[aid].time = card.time;
    console.log(list);
  };
  // useEffect(() => {
  //   console.log(list);
  // }, [list]);

  const removeCard = (id, specific) => {
    const index = specific.cards
      .map((x) => {
        return x.id;
      })
      .indexOf(id);

    setCardy(specific.cards.splice(index, 1));
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    // console.log(
    //   "destination",
    //   destination,
    //   "source",
    //   source,
    //   "draggableId",
    //   draggableId
    // );
    if (!destination) {
      return;
    }
    const sourceList = data[source.droppableId];

    const destinationList = data[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.title === draggableId
    )[0];
    // console.log(draggingCard);
    // console.log(sourceList);
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      setList((prev) => {
        return { ...prev, sourcelist: destinationList };
      });
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      setList((prev) => {
        return {
          ...prev,
          sourcelist: destinationList,
          destinationlist: destinationList,
        };
      });
    }
  };
  useEffect(() => {
    // console.log(list);
  }, [list]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StoreApi.Provider
        value={{
          addMoreCard,
          removeCard,
          addSubData,
          addSubPrio,
          addSubDate,
          addSubTime,
        }}
      >
        <div className="main">
          <Navbar />
          <div className="content">
            <List list={list} specific={list.todo} />
            <List list={list} specific={list.doing} />
            <List list={list} specific={list.done} />
          </div>
        </div>
      </StoreApi.Provider>
    </DragDropContext>
  );
}
