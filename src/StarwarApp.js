import React from "react";
import { Router } from "./router/Router";
import { Navbar } from "./components/Navbar";
import { Buscador } from "./components/Buscador";

export const StarwarApp = () => {
  return (
    <>
      <Navbar/>
      <Buscador/>
      <Router />
    </>
  );
};
