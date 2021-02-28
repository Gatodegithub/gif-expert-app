import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItems />", () => {
  const title = "Un titulo",
    url = "https://localhost/algo.jpg",
    wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe de mostrar el componente correctamente", () => {
    // shallow para testear el componente como una unidad
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el titulo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual a la url de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test('debe de tener animate__fadeIn', () => {
    const div = wrapper.find("div");
    expect(div.prop("className").includes("animate__fadeIn")).toBe(true);
  })
  
});
