var paper, scissor, rock, scoreHuman, scoreComp;
scoreComp = 0
scoreHuman = 0
function computerMove(){
  computerNumber = Math.floor((Math.random() * 3) + 1)
  if (computerNumber === 1) {
    return 'Paper'
  }else if (computerNumber === 2) {
    return 'Scissor'
  }else {
    return 'Rock'
  }
};


function win(humanMove, compMove){
  if (humanMove === 'Paper' && compMove === 'Rock') {
    return 1
  }else if (humanMove === 'Rock' && compMove === 'Paper') {
    return 0
  }else if (humanMove === 'Scissor' && compMove === 'Rock') {
    return 0
  }else if (humanMove === 'Rock' && compMove === 'Scissor') {
    return 1
  }else if (humanMove === 'Scissor' && compMove === 'Paper') {
    return 1
  }else if (humanMove === 'Paper' && compMove === 'Scissor') {
    return 0
  }else {
    return 0.5
  }
}

paper = document.getElementById('paper')
paper.addEventListener('click', function(){
  document.getElementById('playerImage').src = 'paper.jpg'
  computerPlays = computerMove()
  humanPlays = 'Paper'
  if (win(humanPlays, computerPlays) === 1) {
    scoreHuman += 1
    document.getElementById('result').textContent = 'Player Wins'
    document.getElementById('playerScore').textContent = scoreHuman
  }else if (win(humanPlays, computerPlays) === 0) {
    document.getElementById('result').textContent = 'Computer Wins'
    scoreComp += 1
    document.getElementById('computerScore').textContent = scoreComp
  }else{
    document.getElementById('result').textContent = 'Draw'
  }

  if (computerPlays === 'Paper') {
    document.getElementById('computerImage').src = 'paper.jpg'
  }else if (computerPlays === 'Scissor') {
    document.getElementById('computerImage').src = 'scissor.jpg'
  }else {
    document.getElementById('computerImage').src = 'rock.png'
  }
});

scissor = document.getElementById('scissor')
scissor.addEventListener('click', function(){
  document.getElementById('playerImage').src = 'scissor.jpg'
  computerPlays = computerMove()
  humanPlays = 'Scissor'
  if (win(humanPlays, computerPlays) === 1) {
    scoreHuman += 1
    console.log(scoreHuman);
    document.getElementById('result').textContent = 'Player wins'
    document.getElementById('playerScore').textContent = scoreHuman
  }else if (win(humanPlays, computerPlays) === 0) {
    scoreComp += 1
    document.getElementById('result').textContent = 'Computer wins'
    document.getElementById('computerScore').textContent = scoreComp
  }else{
    document.getElementById('result').textContent = 'Draw'
  }


  if (computerPlays === 'Paper') {
    document.getElementById('computerImage').src = 'paper.jpg'
  }else if (computerPlays === 'Scissor') {
    document.getElementById('computerImage').src = 'scissor.jpg'
  }else {
    document.getElementById('computerImage').src = 'rock.png'
  }
})


rock = document.getElementById('rock')
rock.addEventListener('click', function(){
  document.getElementById('playerImage').src = 'rock.png'
  computerPlays = computerMove()
  humanPlays = 'Rock'
  if (win(humanPlays, computerPlays) === 1) {
    scoreHuman += 1
    console.log(scoreHuman);
    document.getElementById('result').textContent = 'Player wins'
    document.getElementById('playerScore').textContent = scoreHuman
  }else if (win(humanPlays, computerPlays) === 0) {
    scoreComp += 1
    document.getElementById('result').textContent = 'Computer wins'
    document.getElementById('computerScore').textContent = scoreComp
  }else{
    document.getElementById('result').textContent = 'Draw'
  }

  if (computerPlays === 'Paper') {
    document.getElementById('computerImage').src = 'paper.jpg'
  }else if (computerPlays === 'Scissor') {
    document.getElementById('computerImage').src = 'scissor.jpg'
  }else {
    document.getElementById('computerImage').src = 'rock.png'
  }
})
