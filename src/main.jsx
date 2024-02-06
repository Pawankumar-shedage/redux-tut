import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./Components/Counter/CounterReducer.js";
import { CakeReducer } from "./Components/CakeShop/CakeReducer.js";

// 3. Store.
const store = configureStore({
  reducer: {
    // counterReducer is a function() that returns the state.
    counter: CounterReducer,
    cake: CakeReducer,
  },
});

console.log(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
