import React from "react";
import { useForm } from "../hooks/useForm";
import { useQuery } from "../hooks/useQuery";

export const Buscador = () => {
  const [params, handleChange] = useForm({busqueda:""});
  const { set } = useQuery();
  const handleSubmit = (e) => {
    e.preventDefault();
    set("search", params.busqueda);
    set("page", 1);
  }
  return (
    <div className="container">
      <form className="input-group mb-3 mt-5" onSubmit={handleSubmit}>
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
