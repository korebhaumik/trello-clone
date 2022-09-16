import { useState, useEffect, React } from "react";
import "./styles/style.css";
import Button from "../components/button";
import Task from "../components/task";
import Card from "../components/card";
import { Droppable } from "react-beautiful-dnd";

export default function List({ list, specific }) {
  const [todo, setTodo] = useState({ id: Math.random(), title: "" });
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState([]);
  const [show, setShow] = useState(false);
  const [temp, settemp] = useState("");
  const [close, setClose] = useState(false);
  const [lastColor, setLastColor] = useState("");
  const cards = specific.cards;
  let aid = -1;
  // useEffect(() => {
  // }, [specific.cards])

  // let color = "#18a24f";
  let color = "#bdb71d";
  // let color = "#bd1d1d";
  return (
    <>
      <div>
        <h1
          onClick={() => {
            console.log(specific.cards);
          }}
        >
          {specific.title}
        </h1>
        <div className="todo">
          <Droppable droppableId={specific.name}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {specific.cards.map((i, index) => {
                  aid = aid + 1;
                  // setx(index);
                  // console.log(i.color);
                  return (
                    <Card
                      temp={temp}
                      todo={todo}
                      setTodo={setTodo}
                      setTodos={setTodos}
                      todos={todos}
                      cards={i}
                      id={specific.cards.id}
                      aid={aid}
                      key={Math.random()}
                      specific={specific}
                      index={index}
                      color={i.color}
                      close={close}
                      setClose={setClose}
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
              setTask={setTask}
              temp={temp}
              settemp={settemp}
              setTodo={setTodo}
              specific={specific}
            />
          )}
          <Button
            todo={todo}
            setTodo={setTodo}
            setTodos={setTodos}
            todos={todos}
            task={task}
            show={show}
            setShow={setShow}
            setTask={setTask}
          />
        </div>
      </div>
    </>
  );
}
