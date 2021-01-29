import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import CalendarBoard from "./components/CalendarBoard/index";

import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <CalendarBoard />
  </Provider>
);

export default App;
