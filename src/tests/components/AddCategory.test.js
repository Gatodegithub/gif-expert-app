import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  // Lo declaro aqui afuera para tener el instelligence de visual studio
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  // ciclo de vida - antes que se ejecute una prueba se ejecutara beforeEach, declaro el wrapper aqui ya que en las pruebas se puede modificar y de esta manera vuelve a estar por default en cada prueba
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";

    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe de postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola mundo";

    wrapper.find("input").simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();
    // setCategories se debe de haber llamado una vez
    expect(setCategories).toHaveBeenCalledTimes(1);
    // setCatgories debe enviar una funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // El valor del input debe de estar vacio
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
