import React from "react";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Naves } from "../components/Naves";
import { Personajes } from "../components/Personajes";
import { Planetas } from "../components/Planetas";

export const Router = ({texto}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/personajes"/>} />
        <Route path="/personajes" element={<Personajes/>} />
        <Route path="/naves" element={<Naves/>} />
        <Route path="/planetas" element={<Planetas/>} />
      </Routes>
    </>
  );
};
