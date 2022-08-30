const faceDados = [1, 2, 3, 4, 5, 6];

const faceDado = () => {
  const dado = faceDados.sort(() => Math.random() - 0.5);
  return dado[0];
};

const test = () => {
  const testList = [];

  for (let i = 0; i < 2000; i++) {
    testList.push(faceDado());
  }
  return testList;
};

const list = test();

const testVicio = { lancamentos: list.length };

for (const el of list) testVicio[el] = testVicio[el] + 1 || 1;

const isHonesto = () => {
  // 1.1 é o desvio padrão que considerei para não ficar muito rígida a regra por que
  // um dado viciado tem que extrapolar a probalidade de 1/6 para um número sair. 
  if (
    testVicio["1"] > (list.length / 6) * 1.1 ||
    testVicio["2"] > (list.length / 6) * 1.1 ||
    testVicio["3"] > (list.length / 6) * 1.1 ||
    testVicio["4"] > (list.length / 6) * 1.1 ||
    testVicio["5"] > (list.length / 6) * 1.1 ||
    testVicio["6"] > (list.length / 6) * 1.1
  ) {
    return "Dado está viciado";
  }
  return "Dado honesto";
};

console.log(testVicio);
console.log(isHonesto())
