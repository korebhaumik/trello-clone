const cards = [
  {
    id: Math.random(),
    title: "Complete Homework",
  },
  {
    id: Math.random(),
    title: "Finish Dinner",
  },
  {
    id: Math.random(),
    title: "Sleep at 11pm",
  },
];

const data = {
  todo: {
    id: Math.random(),
    name: "todo",
    title: "To Do",
    cards: [
      {
        id: Math.random(),
        title: "Complete Homework",
        priority: "none",
        description: "",
        color: "rgba(217, 217, 217, 0.04)",
      },
      {
        id: Math.random(),
        title: "Finish Dinner",
        priority: "none",
        description: "",
        color: "rgba(217, 217, 217, 0.04)",
      },
      {
        id: Math.random(),
        title: "Sleep at 11pm",
        priority: "none",
        description: "",
        color: " rgba(217, 217, 217, 0.04)",
      },
    ],
  },
  doing: {
    id: Math.random(),
    name: "doing",
    title: "Doing",
    cards: [
      {
        id: Math.random(),
        title: "Make Pancakes",
        description: "",
        priority: "none",
        color: " rgba(217, 217, 217, 0.04)",
      },
      {
        id: Math.random(),
        title: "Watch TV show",
        description: "",
        priority: "none",
        color: " rgba(217, 217, 217, 0.04)",
      },
      {
        id: Math.random(),
        title: "Buy new clothes",
        description: "",
        priority: "none",
        color: " rgba(217, 217, 217, 0.04)",
      },
    ],
  },
  done: {
    id: Math.random(),
    name: "done",
    title: "Done",
    cards: [
      {
        id: Math.random(),
        title: "Take Shower",
        priority: "none",
        color: " rgba(217, 217, 217, 0.04)",
      },
      {
        id: Math.random(),
        title: "Play Games",
        priority: "none",
        color: " rgba(217, 217, 217, 0.04)",
      },
      {
        id: Math.random(),
        title: "Sleeeeeep",
        priority: "none",
        color: " rgba(217, 217, 217, 0.04)",
      },
    ],
  },
};

export default data;
