import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import { ROOT } from "navigation/CONSTANTS";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={ROOT} element={<Home />} />
    </Routes>
  );
};
