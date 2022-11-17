const participantNum = parseInt(prompt('give num of participants.'));
participantNames = [];

for (i = 0; i < participantNum; i++){
  participantNames.push(prompt(`Give name of participant ${i+1}.`));
}

participantNames.sort()
const list = document.getElementById('list');


for (i = 0; i<participantNum; i++){
  const listelemt = document.createElement('li');
  listelemt.innerHTML = `${participantNames[i]}`;
  list.append(listelemt);
}