
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
  tableDivScore.classList.remove('hide')
  tableDivScore.classList.add('show')
  closeModal()
  tableDiv.appendChild(insertIntput(name))
}

//TODO hide score list
function hideScore(){
  tableDivScore.classList.remove('show')
  tableDivScore.classList.add('hide')

  modalStart()
}
