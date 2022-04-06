import React from "react";
import { NavLink } from "react-router-dom";
import { AllRoutesArray } from "../routes/AllRoutes";

export default function NavBar({ title }) {
  return (
    <header className='App-header'>
      {AllRoutesArray.map((entry, index) => (
        <NavLink style={{ padding: "10px" }} key={index} to={entry.path}>
          {entry.name}
          {/* <img src={entry.icon} alt={entry.name} /> */}
          {/* <IonIcon icon={entry.icon} /> */}
          {/* ICON TAG WITH ICON */}
        </NavLink>
      ))}
      <br />

      <h1>{title}</h1>
    </header>
  );
}
