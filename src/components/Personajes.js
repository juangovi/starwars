import React, { useEffect, useState } from "react";
import { Buscador } from "./Buscador";
import { firstFetch } from "../service/FetchService";
import { Paginacion } from "./Paginacion";
export const Personajes = () => {
  const [personajes, setPersonajes] = useState("");
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [result, setresult] = useState({
    data: {},
    loading: true,
    error: false,
  });

  useEffect(() => {
    console.log("Personajes");
    firstFetch(
      `https://swapi.dev/api/people/?search=${personajes}&page=${pagina}`
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
  }, [personajes, pagina]);

  return (
    <div>
      <Buscador setBusqueda={setPersonajes} resetPages={setPagina} />
      <div className="container">
        {result.loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <>
            <div className="row">
              {result.data.results.map((personaje) => (
                <div className="col-md-4" key={personaje.name}>
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{personaje.name}</h5>
                      <p className="card-text">
                        <strong>Altura:</strong> {personaje.height}
                        <br />
                        <strong>Peso:</strong> {personaje.mass}
                        <br />
                        <strong>Color de ojos:</strong> {personaje.eye_color}
                        <br />
                        <strong>Color de pelo:</strong> {personaje.hair_color}
                        <br />
                        <strong>Género:</strong> {personaje.gender}
                        <br />
                        <strong>
                          <a href={personaje.url}>Ver más</a>
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
