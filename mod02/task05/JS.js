let usrprompt = 0;
let numbers = [];

while (usrprompt == 0) {
  let int = parseInt(prompt(`Give number.`));
  if (numbers.includes(int)){
    alert('THIS NUMBER EXISTSAJHASJKJKLHJKL.-___!!!!!!!');
    usrprompt = 1;
  }
  else{
    numbers.push(int);
  }
}

numbers.sort(function(a, b){return a-b});

for (i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}