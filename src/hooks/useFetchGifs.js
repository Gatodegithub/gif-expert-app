import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // Se ejecutara esta funcion cuando el componente es renderizado por primera vez. En clases como componentes seria el metodo componentDidMount.
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
