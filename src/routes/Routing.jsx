import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllRoutesArray } from "./AllRoutes";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        {AllRoutesArray.map((entry, index) => (
          <Route key={index} exact={entry.ex} path={entry.path} element={entry.comp} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
