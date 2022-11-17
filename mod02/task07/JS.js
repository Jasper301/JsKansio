let roll = -1
const dicesides = parseInt(prompt('num of sides'))

function rollDice(sides) {
  return Math.ceil(Math.random(sides) * sides);
}

const list = document.getElementById('list');

while (roll != dicesides){
  roll = rollDice(dicesides)
  const listelemt = document.createElement('li');
  listelemt.innerHTML = roll;
  list.append(listelemt);
}