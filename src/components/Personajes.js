import React, { useEffect, useState } from "react";
import { Buscador } from "./Buscador";
import ReactPaginate from 'react-paginate';

export const Personajes = () => {
  const [personajes, setPersonajes] = useState("");
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
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
  }, [personajes, pagina]);
  const firstFetch = async () => {
    const url = `https://swapi.dev/api/people/?search=${personajes}&page=${pagina}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setTotalPaginas(data.count / 10);
    setresult({
      personajes: data.results,
      loading: false,
    });
  };
  return (
    <div>
      <Buscador setPersonajes={setPersonajes}/>
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
      <ReactPaginate
        previousLabel="< Anterior"
        nextLabel="Siguiente >"
        breakLabel="..."
        pageCount={totalPaginas} 
        pageRangeDisplayed={3}
        onPageChange={(data) => {
          setPagina(data.selected + 1);
        }
        }
        containerClassName="pagination d-flex justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
        activeClassName="active"
        breakClassName="page-item disabled"
        breakLinkClassName="page-link"
        forcePage={pagina - 1}
      />
    </div>
  );
};
