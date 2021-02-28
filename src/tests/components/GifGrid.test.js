import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGifs";
// simulando llamada al useFetch
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el <GifGrid />", () => {
  const category = "One Punch";

  test("debe de mostrarse correctamente", () => {
    useFetchGif.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "ABC2",
        url: "https://localhost/cualquier/cosa2.jpg",
        title: "Cualquier cosa2",
      },
    ];

    useFetchGif.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
