import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  // Para tener actualizado el estado de la variable inputValue con cada cambio.
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      // setCategories recibe un callback donde podemos llamar a la variable del estado
      // NO PUEDO CAMBIAR LOS DATOS DIRECTAMENTE. EN ESTE CASO CREO OTRO ARRAY CON LOS DATOS DEL OTRO
      setCategories((el) => [inputValue, ...el]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
