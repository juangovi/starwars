import React from 'react'
import ReactPaginate from 'react-paginate';
import { useQuery } from '../hooks/useQuery';

export const Paginacion = ({totalPaginas}) => {
  const { set, get } = useQuery();
  console.log(get("page"));
  return (
    <ReactPaginate
        previousLabel="< Anterior"
        nextLabel="Siguiente >"
        breakLabel="..."
        pageCount={Math.ceil( totalPaginas )} 
        pageRangeDisplayed={3}
        onPageChange={(data) => {
          set("page", data.selected + 1);
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
        forcePage={get("page") ? Number(get("page"))-1 : 0}
      />
  )
}
