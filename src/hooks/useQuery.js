import { useLocation } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
export const useQuery = () => {
  const history = useNavigate ();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const get = (name) => query.get(name) ? query.get(name) : "";
  const set = (name, value) => {
    query.set(name, value);
    history({ search: query.toString() });
  }
  return { get, set };
};
