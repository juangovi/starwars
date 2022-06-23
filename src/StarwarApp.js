import React from "react";
import { Router } from "./router/Router";
import { Navbar } from "./components/Navbar";

export const StarwarApp = () => {
  return (
    <>
      <Navbar/>
      <Router />
    </>
  );
};
