let roll = -1

function rollDice() {
  return Math.ceil(Math.random() * 6);
}

const list = document.getElementById('list');

while (roll != 6){
  roll = rollDice()
  const listelemt = document.createElement('li');
  listelemt.innerHTML = roll;
  list.append(listelemt);
}