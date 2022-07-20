import React, { useEffect, useState } from "react";
import { Buscador } from "./Buscador";
import { firstFetch } from "../service/FetchService";
import { Paginacion } from "./Paginacion";

export const Planetas = () => {
  const [planetas, setplanetas] = useState("");
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [result, setresult] = useState({
    data: {},
    loading: true,
    error: false,
  });
  useEffect(() => {
    console.log("planetas");
    firstFetch(
      `https://swapi.dev/api/planets/?search=${planetas}&page=${pagina}`
    ).then((data) => {
      console.log(data);
      setresult(data);
      setTotalPaginas(data.data.count / 10);
    });
    return () => {
      setresult({
        data: {},
        loading: true,
        error: false,
      });
    };
  }, [planetas, pagina]);

  return (
    <div>
      <Buscador setBusqueda={setplanetas} resetPages={setPagina} />
      <div className="container">
        {result.loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <>
            <div className="row">
              {result.data.results.map((planeta) => (
                <div className="col-md-4" key={planeta.name}>
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{planeta.name}</h5>
                      <p className="card-text">
                        <strong>diametro:</strong> {planeta.diameter}
                        <br />
                        <strong>clima:</strong> {planeta.climate}
                        <br />
                        <strong>population:</strong> {planeta.population}
                        <br />
                        <strong>Terreno:</strong> {planeta.terrain}
                        <br />
                        <strong>
                          <a href={planeta.url}>Ver más</a>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Paginacion setPagina={setPagina} totalPaginas={totalPaginas} />
          </>
        )}
      </div>
    </div>
  );
};
