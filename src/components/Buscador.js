import React from "react";
import { useForm } from "../hooks/useForm";

export const Buscador = () => {
  const [params, handleChange] = useForm({busqueda:""})
  
  return (
    <div className="container">
      <form className="input-group mb-3 mt-5" onSubmit={(e) => e.preventDefault()}>
        <button
          className="btn btn-primary"
          type="submit"
          id="button-addon1"
        >
          Buscar
        </button>
        <input
          type="text"
          className="form-control"
          name="busqueda"
          placeholder="Nombre del personaje"
          value={params.busqueda}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
