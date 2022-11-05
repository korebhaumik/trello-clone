import { useState, useEffect, React } from "react";
import "./styles/style.css";
import Button from "../components/button";
import Task from "../components/task";
import Card from "../components/card";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";

export default function List({ specific }) {
  const [show, setShow] = useState(false);
  const { isOver, setNodeRef } = useDroppable({ id: specific.id });

  return (
    <>
      <div>
        <h1>{specific.title}</h1>
        <div className="todo">
          <SortableContext
            id={specific.id}
            items={specific.cards}
            strategy={rectSortingStrategy}
          >
            <div ref={setNodeRef} className="srt-context">
              {specific.cards.map((item, index) => {
                return (
                  <Card
                    card={item}
                    key={item.id}
                    index={index}
                    container={specific.name}
                  />
                );
              })}
            </div>
          </SortableContext>
          {show && (
            <Task show={show} setShow={setShow} container={specific.id} />
          )}
          <Button setShow={setShow} />
        </div>
      </div>
    </>
  );
}
