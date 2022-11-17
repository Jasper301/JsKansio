const numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function even(array){
  let evennumbers = []
  for (i = 0; i<array.length; i++){
    if (array[i] % 2 == 0){
      evennumbers.push(array[i])
    }
  }
  return evennumbers
}

console.log(numarray)
console.log(even(numarray))