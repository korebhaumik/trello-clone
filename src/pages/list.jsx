import { useState, useEffect, React } from "react";
import "./styles/style.css";
import Button from "../components/button";
import Task from "../components/task";
import Card from "../components/card";
import { Droppable } from "react-beautiful-dnd";

export default function List({ specific }) {
  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState("");
  const [lastColor, setLastColor] = useState("");

  return (
    <>
      <div>
        <h1>{specific.title}</h1>
        <div className="todo">
          <Droppable droppableId={specific.name}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {specific.cards.map((i, index) => {
                  return (
                    <Card
                      cards={i}
                      id={specific.cards.id}
                      aid={index}
                      key={Math.random()}
                      specific={specific}
                      index={index}
                      color={i.color}
                      setLastColor={setLastColor}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {show && (
            <Task
              show={show}
              setShow={setShow}
              temp={temp}
              setTemp={setTemp}
              specific={specific}
            />
          )}
          <Button setShow={setShow} />
        </div>
      </div>
    </>
  );
}
