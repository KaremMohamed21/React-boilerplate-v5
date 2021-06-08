import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./../css/app.css";
import AppRouter from "./../routes";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
