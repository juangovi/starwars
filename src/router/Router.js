import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { AllIyems } from "../components/AllIyems";
import { Personajes } from "../components/Personajes";

export const Router = ({texto}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllIyems />} />
        <Route path="/personajes" element={<Personajes texto={texto}/>} />
      </Routes>
    </>
  );
};
