import React from "react";
import ReactDOM from "react-dom/client";
import rootReducer from "./logic/reducers/rootReducer";
import App from "./view/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import service from "./service/middleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: service,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
