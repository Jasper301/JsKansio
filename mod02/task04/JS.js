

let usrprompt = -1
let numbers = [];

while (usrprompt != 0) {
  usrprompt = parseInt(prompt(`Give number.`))
  numbers.push(usrprompt);
}

numbers.sort(function(a, b){return b-a});

for (i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}