import React, { useEffect, useState } from "react";
import { Buscador } from "./Buscador";
import { CustomFetch } from "../service/FetchService";
import { Paginacion } from "./Paginacion";
import { useQuery } from "../hooks/useQuery";
export const Naves = () => {
  const  {get}  = useQuery();
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [result, setresult] = useState({
    data: {},
    loading: true,
    error: false,
  });

  useEffect(() => {
    console.log("Naves");
    CustomFetch(
      `https://swapi.dev/api/starships/`,{search: get("search"), page: get("page")}
    ).then((data) => {
      console.log(data);
      setresult(data);
      setTotalPaginas(data.data.count / 10);
    }
    );
    return () => {
      setresult({
        data: {},
        loading: true,
        error: false,
      });
    }
  }, [get("search"), get("page")]);

  return (
    <div>
      <div className="container">
        {result.loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <>
            <Buscador />
            <div className="row">
              {result.data.results.map((nave) => (
                <div className="col-md-4" key={nave.name}>
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{nave.name}</h5>
                      <p className="card-text">
                        <strong>modelo:</strong> {nave.model}
                        <br />
                        <strong>velocidad:</strong> {nave.max_atmosphering_speed}
                        <br />
                        <strong>precio:</strong> {nave.cost_in_credits}
                        <br />
                        <strong>manufactura:</strong> {nave.manufacturer}
                        <br />
                        <strong>
                          <a href={nave.url}>Ver más</a>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Paginacion totalPaginas={totalPaginas} />
          </>
        )}
      </div>
    </div>
  );
};

