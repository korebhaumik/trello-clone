import React from "react";
import { useContext, useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import storeApi from "../utils/storeApi";
import { motion } from "framer-motion";
import Modal from "./modal.js";

export default function Card({
  temp,
  todo,
  setTodo,
  todos,
  cards,
  id,
  specific,
  index,
  aid,
  color,
  setLastColor,
  // close,
  // setClose,
}) {
  const [close, setClose] = useState(false);
  const { removeCard } = useContext(storeApi);
  // let color = specific.cards[aid];

  const colorShow = () => {
    // console.log(color);
    return {
      backgroundColor: color,
    };
  };

  const handleRemove = () => {
    removeCard(cards.id, specific);
  };
  const handleShow = () => {
    // if (id===)
    // console.log(cards.title);
    setClose(true);
  };
  useEffect(() => {
    // console.log(color);
    // console.log(cards.title);
  });
  useEffect(() => {
    // console.log(cards);
  });

  const colorCheck = () => {
    if (cards.priority === "mid")
      return {
        backgroundColor: "#bdb71d",
      };
    else if (cards.priority === "low") {
      // console.log(true);
      return {
        backgroundColor: "#18a24f",
      };
    } else if (cards.priority === "high")
      return {
        backgroundColor: "#bd1d1d",
      };
    else return { background: "rgba(217, 217, 217, 0.04)" };
    // backgroundColor: "#000000"
  };
  return (
    <>
      <Draggable draggableId={cards.title} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <motion.div
              className="card"
              transition={{
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 0,
              }}
            >
              <hr style={colorShow()} />

              <p>{cards.title}</p>
              <div>
                {/* cross */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cross"
                  onClick={handleRemove}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <div className="closing">
                  {/* menu */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="menu"
                    onClick={handleShow}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>
                  {/* date */}
                  {cards.date && (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="calend"
                        onClick={handleShow}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                      <p className="date-text">{cards.date}</p>
                    </div>
                  )}
                  {/* time */}
                  {cards.time && (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="Clock"
                        onClick={handleShow}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="date-text">{cards.time}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </Draggable>
      {close && (
        <Modal
          setClose={setClose}
          cards={cards}
          specific={specific}
          aid={aid}
          color={color}
          setLastColor={setLastColor}
        />
      )}
    </>
  );
}
