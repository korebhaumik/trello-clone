import { useState, useEffect, React } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MuiDatePicker from "./dateShow.js";
import MuiTimePicker from "./timeShow.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import storeApi from "../utils/storeApi";
import { useContext } from "react";

export default function Modal({
  setClose,
  cards,
  specific,
  aid,
  setLastColor,
}) {
  const [state, setState] = useState(false);
  const handleRender = () => {
    setState((prev) => !prev);
  };
  const handleUpdate = (e) => {
    addSubPrio(e.target.id, cards, specific, e.target.align, aid);
    setState((prev) => !prev);
  };

  const handleRemove = () => {
    setClose((prev) => !prev);
    setLastColor(Math.random());
  };

  const { addSubData } = useContext(storeApi);
  const { addSubPrio } = useContext(storeApi);
  const handleChange = (e) => {
    addSubData(e.target.value, cards, specific, aid);
  };

  const colorCheck = () => {
    if (specific.cards[aid].priority === "mid")
      return {
        backgroundColor: "#bdb71d",
      };
    else if (specific.cards[aid].priority === "low") {
      return {
        backgroundColor: "#18a24f",
      };
    } else if (specific.cards[aid].priority === "high")
      return {
        backgroundColor: "#bd1d1d",
      };
    else return { background: "rgba(217, 217, 217, 0.04)" };
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="modal">
        <div className="m-container">
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
          <div className="title">
            {/* notes */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="notes"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            <h1>{cards.title}</h1>
          </div>

          <h2 className="m-h2">
            in list <span>{specific.title}</span>
          </h2>

          <div className="m-holder">
            <div>
              <div className="home" onClick={handleRender}>
                <main className="rect" style={colorCheck()} />
                {/* arrow-d */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="arrow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {state && (
                <div className="dropDown">
                  <div
                    onClick={handleUpdate}
                    id="none"
                    align="rgba(217, 217, 217, 0.04)"
                  >
                    {" "}
                    <main className="rect-n" />
                    None
                  </div>
                  <div onClick={handleUpdate} id="low" align="#18a24f">
                    {" "}
                    <main className="rect-l" />
                    Low
                  </div>
                  <div onClick={handleUpdate} id="mid" align="#bdb71d">
                    {" "}
                    <main className="rect-m" />
                    Mid
                  </div>
                  <div onClick={handleUpdate} id="high" align="#bd1d1d">
                    {" "}
                    <main className="rect-h" />
                    High
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="date">
                <MuiDatePicker
                  setLastColor={setLastColor}
                  cards={cards}
                  specific={specific}
                  aid={aid}
                />
              </div>
            </div>
            <div>
              <div className="time">
                <MuiTimePicker
                  setLastColor={setLastColor}
                  cards={cards}
                  specific={specific}
                  aid={aid}
                />
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
            <h1 className="m-h1">Description</h1>
          </div>
          <textarea
            placeholder="Enter Description"
            onChange={handleChange}
            defaultValue={specific.cards[aid].description}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
}
