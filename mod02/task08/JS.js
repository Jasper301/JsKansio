let strlist = ['Jonny', 'Deedee', 'Joey', 'Marky'];

function concat(array){
  let modifiedvar = ''
  for (i = 0; i<array.length; i++){
    modifiedvar = modifiedvar + array[i];
  }
  return modifiedvar;
}

document.querySelector('#p').textContent = concat(strlist);