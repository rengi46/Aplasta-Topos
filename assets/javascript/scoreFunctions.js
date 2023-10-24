
function addScore(x) {
  score = score + x
  userScore.innerHTML = score
}

//TODO calculate final Score
function calculateScore() {
  return score
};

//TODO display score list
function displayScore(name){
  callDom()
  tableDiv.classList.remove('hide')
  tableDiv.classList.add('show')
  First.classList.remove('show')
  First.classList.add('hide')
  closeModal()
  tableDiv.appendChild(insertIntput(name))
}

//TODO hide score list
function hideScore(){
  console.log('hide');
  tableDiv.classList.remove('show')
  tableDiv.classList.add('hide')
  First.classList.remove('hide')
  First.classList.add('show')
  modalStart()
}
