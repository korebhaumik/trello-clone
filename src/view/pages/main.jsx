import React from "react";
import List from "./list";
import { updateBoardName } from "../../logic/actions/listActions";
import { AnimatePresence, motion } from "framer-motion";
import { dragEnd, dragOver } from "../../logic/actions/dndActions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import Navbar from "../components/navbar.js";
import Delete from "../components/delete";
import Card from "../components/card";
import SideDrawer from "../components/sideDrawer";

export default function Main() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.allBoards);
  const boardIndex = useSelector((state) => state.boardIndex);
  const show = useSelector((state) => state.showDrawer);
  const [activeID, setActiveID] = useState(null);
  const [temp, setTemp] = useState("");

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    setTemp(info[boardIndex].name);
  }, [info[boardIndex].name]);
  const handleDragStart = (event) => {
    // console.log(event.active.id);
    setActiveID(event.active.id);
  };
  const handleDragOver = ({ active, over }) => {
    // console.log(active, over);
    dispatch(dragOver(active, over, boardIndex));
  };
  const handleDragEnd = ({ active, over }) => {
    dispatch(dragEnd({ active, over, boardIndex }));
    // console.log(activeID);
    setActiveID(null);
  };
  const handleDragCancel = () => {
    setActiveID(null);
  };

  const handleUpdateBoardName = (event) => {
    if (event.key == "Enter") {
      dispatch(updateBoardName(temp, boardIndex));
      toast.success("Successfully updated!!");
    }
  };
  // const t = info[boardIndex].name;
  return (
    <>
      <Toaster />
      <div className="main">
        <Navbar />
        <div className="parent">
          <input
            className="board-title"
            placeholder="Add List Name..."
            onChange={(event) => {
              setTemp(event.target.value);
            }}
            value={temp}
            onKeyDown={handleUpdateBoardName}
          />
        </div>
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
          onDragOver={handleDragOver}
        >
          <div className="content">
            <List specific={info[boardIndex].data.Todo} />
            <List specific={info[boardIndex].data.Doing} />
            <List specific={info[boardIndex].data.Done} />
          </div>
          <DragOverlay
            modifiers={[restrictToWindowEdges]}
            // className="overlay"
            //   transition="transform 0ms ease"
            // style={{ transitionDuration: `${200}ms` }}
          >
            {activeID ? (
              <Card
                card={{
                  id: Math.random(),
                  title: "Test Card",
                  priority: "none",
                  description: "",
                  color: "rgba(217, 217, 217, 0.04)",
                }}
                index={1}
                container={"todo"}
                dragOverlay
              />
            ) : null}
          </DragOverlay>
          <AnimatePresence mode="wait">
            {activeID && <Delete />}
          </AnimatePresence>
        </DndContext>
        <AnimatePresence mode="wait">{show && <SideDrawer />}</AnimatePresence>
      </div>
    </>
  );
}
