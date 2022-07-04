import React, { useEffect, useState } from "react";
import { Buscador } from "./Buscador";

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [result, setresult] = useState({
    personajes: [],
    loading: true,
  });
  useEffect(() => {
    console.log("Personajes");
    firstFetch();
    return () => {
      setresult({
        personajes: [],
        loading: true,
      });
    };
  }, []);
  const firstFetch = async () => {
    const url = `https://swapi.dev/api/people/`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setresult({
      personajes: data.results,
      loading: false,
    });
  };
  return (
    <div>
      <Buscador />
      <div className="container">
        {result.loading ?
          <div className="text-center">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        :
          <div className="row">
            {result.personajes.map((personaje) => (
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
        }
      </div>
    </div>
  );
};
