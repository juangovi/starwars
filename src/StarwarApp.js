import React from "react";
import { Router } from "./router/Router";
import { Link } from "react-router-dom";
export const StarwarApp = () => {
  return (
    <>
      <div className="stars container-fluid">
        <h1>Star wars</h1>
        <div className="container pb-3">
          <div className="row justify-content-center text-center">
            <Link to="/personajes" className="col-md-2 p-2">
              personajes
            </Link>
            <div className="col-md-2 p-2">naves</div>
            <div className="col-md-2 p-2">planetas</div>
          </div>
        </div>
      </div>
      <Router texto="a pos si" />
    </>
  );
};
