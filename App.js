import React from "react";
import Nav from "./src/Nav";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import moviesReducer from "./src/redux/reducers/moviesReducer";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(moviesReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}
