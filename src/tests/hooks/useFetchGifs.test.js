import { useFetchGif } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inicial", async () => {
    // crea un componente virtual en el cual colocara nuestro custom hook
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("One Punch")
    );
    // valor actual que tenga el custom hook
    const { data, loading } = result.current;

    console.log(data, loading);
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe de retornar un arreglo de imgs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("One Punch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});
