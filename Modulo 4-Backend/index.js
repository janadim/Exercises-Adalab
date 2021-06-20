//ejemplo
const numbers = [1, 2, 3];

for (let index = 0; index < 10; index++) {
  const randomNumber = Math.round(Math.random() * 10);
  numbers.push(randomNumber);
}

console.log(`Los números aleatorios son`, numbers);

//ejercicio 1
function add(a, b) {
  console.log("La suma de los numeros es:", a + b);
  return a + b;
}
add(2, 9);

//ejercicio 2
