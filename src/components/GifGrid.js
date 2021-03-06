import React from "react";
import PropTypes from "prop-types";
import { useFetchGif } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGif(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {/* Si loading esta en true se mostrara el <p> */}
      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          // {...img} de esta forma estoy mandando cada una de las propiedades de la img como una propiedad independiente
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}