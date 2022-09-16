import React from "react";
import Task from "./task";
export default function Button({ setShow }) {
  const handleAdd = () => {
    setShow((prev) => {
      if (prev === true) return prev;
      else return !prev;
    });
  };

  return (
    <>
      <button onClick={handleAdd}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="plus"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add Task
      </button>
    </>
  );
}