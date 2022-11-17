numlist = []

for (i = 0; i<5; i++){
  numlist.unshift(prompt('Gib number.'))
}

for (i =0; i<numlist.length; i++){
  console.log(numlist[i])
}