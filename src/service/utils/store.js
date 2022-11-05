const transitData = [
  {
    name: "Board 1",
    id: 0,
    data: {
      Todo: {
        id: "Todo",
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
      Doing: {
        id: "Doing",
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
      Done: {
        id: "Done",
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
    },
  },
];

export default transitData;

export const skeletonData = {
  Todo: {
    id: "Todo",
    cards: [],
  },
  Doing: {
    id: "Doing",
    cards: [],
  },
  Done: {
    id: "Done",
    cards: [],
  },
};
