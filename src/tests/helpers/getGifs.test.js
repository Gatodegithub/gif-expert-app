import { getGifs } from "../../helpers/getGifs";

describe("pruebas con getGifs Fetch", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });

  test("Si no envio categoria, debo recibir 0", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
