participantNames = [];

for (i = 0; i < 6; i++){
  participantNames.push(prompt(`Give name of participant ${i+1}.`));
}

participantNames.sort();
participantNames.reverse();

for (i = 0; i<6; i++){
  const listelemt = document.createElement('li');
  listelemt.innerHTML = `${participantNames[i]}`;
  list.append(listelemt);
}