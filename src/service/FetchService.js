export const firstFetch = async ( url ) => {
  //const url = `https://swapi.dev/api/people/?search=${personajes}&page=${pagina}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data.results);
  return({
    data: data,
    loading: false,
    error: false
  });
};