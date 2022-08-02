export const CustomFetch = async ( url, params ) => {
  //const url = `https://swapi.dev/api/people/?search=${personajes}&page=${pagina}`;
  const newurl = new URL(url);
  newurl.search = new URLSearchParams(params).toString();
  console.log(newurl);
  const response = await fetch(newurl);
  const data = await response.json();
  //console.log(data.results);
  return({
    data: data,
    loading: false,
    error: false
  });
};