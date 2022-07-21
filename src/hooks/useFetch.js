import React from 'react'

export const useFetch = (url, query) => {
  const [state, setState] = React.useState({
    loading: true,
    data: null,
    error: null,
  });
  React.useEffect(() => {
    setState({ loading: true, data: null, error: null });
    const fetchData = async () => {
      try {
        const response = await fetch(url + new URLSearchParams(query).toString());
        const data = await response.json();
        setState({ loading: false, data, error: null });
      } catch (error) {
        setState({ loading: false, data: null, error });
      }
    }
    fetchData();
  }, [url, query]);

  return state;
}
