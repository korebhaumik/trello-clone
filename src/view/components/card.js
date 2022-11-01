import React from "react";
import { useContext, useState, useEffect } from "react";
import {
  removeCard,
  showCurrentCard,
} from "../../logic/actions/cardsAction.js";
import { Draggable } from "react-beautiful-dnd";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal.js";
import { useSortable } from "@dnd-kit/sortable";
// import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Card({ card, index, container }) {
  const dispatch = useDispatch();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });
  const [close, setClose] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const dragHandleStyle = {
    cursor: isDragging ? "grabbing" : "grab",
  };

  const colorShow = () => {
    return {
      backgroundColor: card.color,
    };
  };

  const handleShow = () => {
    setClose(true);
  };

  return (
    <>
      <div style={style} ref={setNodeRef} {...attributes}>
        <motion.div className="card">
          <hr style={colorShow()} />

          <p>{card.title}</p>
          <div>
            {/* drag handle */}
            <div className="drag-handle" style={dragHandleStyle} {...listeners}>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.45833" cy="1.45833" r="1.45833" fill="#919EAB" />
                <circle cx="1.45833" cy="5.54167" r="1.45833" fill="#919EAB" />
                <circle cx="1.45833" cy="9.625" r="1.45833" fill="#919EAB" />
                <circle cx="5.54165" cy="1.45833" r="1.45833" fill="#919EAB" />
                <circle cx="5.54165" cy="5.54167" r="1.45833" fill="#919EAB" />
                <circle cx="5.54165" cy="9.625" r="1.45833" fill="#919EAB" />
              </svg>
            </div>
            {/* cross */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="cross"
              onClick={() => {
                dispatch(removeCard(card.id, container));
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
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
              {card.date && (
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
                  <p className="date-text">{card.date}</p>
                </div>
              )}
              {/* time */}
              {card.time && (
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
                  <p className="date-text">{card.time}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {close && (
        <Modal
          setClose={setClose}
          card={card}
          index={index}
          container={container}
        />
      )}
    </>
  );
}
