import { React, useEffect } from "react";
import useOnClickOutsideRef from "../hooks/clickOutside";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  removeBoard,
  addNewBoard,
  updateBoardIndex,
} from "../../logic/actions/listActions";

export default function SideDrawer() {
  const dispatch = useDispatch();
  const boardIndex = useSelector((state) => state.boardIndex);
  const allBoards = useSelector((state) => state.allBoards);
  const showDrawer = useSelector((state) => state.showDrawer);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key == "Escape") {
        dispatch({ type: "SHOW" });
        // console.log("yess");
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
  const handleRemove = (id, index, event) => {
    event.stopPropagation();
    dispatch(removeBoard(id, index, allBoards, boardIndex));
  };

  const handleBoardToggle = (index) => {
    dispatch(updateBoardIndex(index));
    dispatch({ type: "SHOW" });
  };

  return (
    <div className="w">
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 1 }}
        exit={{ opacity: 0, x: -400 }}
        transition={{ duration: 0.2 }}
        className="drawer"
      >
        {" "}
        <h1>Boards</h1>
        <main>
          {/* Primary Board */}
          <div onClick={() => handleBoardToggle(0)}>
            {/* trend */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="trend"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
            <h2>{allBoards[0].name || "Board 1"}</h2>
            {/* star */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {allBoards.map((board, index) => {
            if (index > 0) {
              return (
                <div key={index} onClick={() => handleBoardToggle(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="trend"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                  <h2>{board.name || `Board ${index + 1}`}</h2>
                  {/* cross */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="x"
                    onClick={(event) => {
                      handleRemove(board.id, index, event);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              );
            }
          })}
          {/* {cross} */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="exit"
            onClick={() => {
              dispatch({ type: "SHOW" });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <hr />
          <div
            role="button"
            className="new-board-btn"
            onClick={() => {
              dispatch(addNewBoard(allBoards.length));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <h3>Add New Board</h3>
          </div>
        </main>
      </motion.div>
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          dispatch({ type: "SHOW" });
        }}
      ></motion.div>
    </div>
  );
}
