import React from "react";
import List from "./list";
import { AnimatePresence, motion } from "framer-motion";
import { dragEnd, dragOver } from "../../logic/actions/dndActions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
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
  const info = useSelector((state) => state.globalData);
  const show = useSelector((state) => state.showDrawer);
  const [activeID, setActiveID] = useState(null);

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragStart = (event) => {
    // console.log(event.active.id);
    setActiveID(event.active.id);
  };
  const handleDragOver = ({ active, over }) => {
    // console.log(active, over);
    dispatch(dragOver(active, over));
  };
  const handleDragEnd = ({ active, over }) => {
    dispatch(dragEnd({ active, over }));
    // console.log(activeID);
    setActiveID(null);
  };
  const handleDragCancel = () => {
    setActiveID(null);
  };

  return (
    <>
      <div className="main">
        <Navbar />
        <div className="parent">
          <input className="board-title" placeholder="Add List Name..." />
        </div>
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
          onDragOver={handleDragOver}
        >
          <div className="content">
            <List specific={info.todo} />
            <List specific={info.doing} />
            <List specific={info.done} />
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
