import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import storeApi from "../utils/storeApi";
import { useContext } from "react";

export default function Task({ temp, setTemp, setShow, specific }) {
  const { addMoreCard } = useContext(storeApi);
  const handleRemove = () => {
    setShow((prev) => !prev);
  };
  const handleChange = (e) => {
    setTemp(e.target.value);
  };
  const handleCheck = () => {
    if (temp !== "") {
      addMoreCard(temp, specific);
      setShow((prev) => !prev);
      setTemp("");
    }
  };
  return (
    <>
      <div className="task">
        <TextareaAutosize
          placeholder="Task Name"
          onChange={handleChange}
          value={temp}
        />
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
          {/* check */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="check"
            onClick={handleCheck}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
