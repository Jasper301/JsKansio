const dicenum = parseInt(prompt(' Give amount = dice ?'));

for (let i = 0; i < dicenum; i++){
  let dice = Math.floor(Math.random() * 6) + i
  sum = sum + dice
}

document.querySelector('#print').innerHTML = `Sum of dice  = ${sum}`