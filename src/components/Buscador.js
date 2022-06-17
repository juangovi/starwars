import React from "react";

export const Buscador = () => {
  return (
    <div className="container">
      <div class="input-group mb-3 mt-5">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Buscar
        </button>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
    </div>
  );
};
