import React from 'react'

export const useFetch = ({url}) => {
  const [result, setresult] = useState({
    data: {},
    loading: true,
  });

  // const url = `https://swapi.dev/api/people/?search=${personajes}&page=${pagina}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  // setTotalPaginas(data.count / 10);
  setresult({
    data,
    loading: false,
    error
  });
  return result
}
