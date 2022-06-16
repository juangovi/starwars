import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { AllIyems } from "../components/AllIyems";
import { Naves } from "../components/Naves";
import { Personajes } from "../components/Personajes";
import { Planetas } from "../components/Planetas";

export const Router = ({texto}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllIyems />} />
        <Route path="/personajes" element={<Personajes texto={texto}/>} />
        <Route path="/naves" element={<Naves texto={texto}/>} />
        <Route path="/planetas" element={<Planetas texto={texto}/>} />
      </Routes>
    </>
  );
};
