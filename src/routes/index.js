import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./../components/Navbar";
import PrivateRoute from "./../utils/PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Landing} />
    </Router>
  );
};

export default AppRouter;
