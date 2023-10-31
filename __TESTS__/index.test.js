const encryptThis = require('../app');

describe("Executa digiral root", () => {
  test("com valor string 'hello world' deve retornar o valor '104olle 119drlo'", () => {
    expect(encryptThis('hello world')).toBe('104olle 119drlo');
  });
  test("tentando passar um valor que nao seja do tipo string", () => {
    expect(() => { encryptThis(new Date()) }).toThrow();
  })
  test("tentando passar string vazia", () => {
    expect(() => { encryptThis('') }).toThrow();
  })
  test("tentando passar string somente com espaços", () => {
    expect(() => { encryptThis('               ') }).toThrow();
  })
});
