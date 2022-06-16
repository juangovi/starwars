import React from "react";
import { Router } from "./router/Router";
import { NavLink } from "react-router-dom";

export const StarwarApp = () => {
  return (
    <>
      <div className="stars container-fluid">
        <h1>Star wars</h1>
        <div className="container">
          <div className="row justify-content-center text-center">
            <NavLink to="/personajes" className="col-md-2 p-2 link">
              personajes
            </NavLink>
            <NavLink to="/naves" className="col-md-2 p-2 link">
              naves
            </NavLink>
            <NavLink to="/planetas" className="col-md-2 p-2 link">
              planetas
            </NavLink>
          </div>
        </div>
      </div>
      <Router texto="a pos si" />
    </>
  );
};
