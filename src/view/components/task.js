import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../logic/actions/cardsAction";
import TextareaAutosize from "react-textarea-autosize";

export default function Task({ setShow, container }) {
  // console.log(container);
  const dispatch = useDispatch();
  const boardIndex = useSelector((state) => state.boardIndex);
  const [temp, setTemp] = useState("");
  const handleRemove = () => {
    setShow((prev) => !prev);
  };
  const handleChange = (e) => {
    setTemp(e.target.value);
  };
  const handleAdd = () => {
    if (temp) {
      dispatch(addCard(temp, container, boardIndex));
      setShow((prev) => !prev);
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
            onClick={handleAdd}
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
