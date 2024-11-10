function checkWhoWin(userMove){
  let computerMove = pickComputerMove();
  let userMoveImg;
  let computerMoveImg;
if(userMove === 'Rock')
{
  userMoveImg = 'rock-emoji.png';
  if(computerMove === 'Rock')
  {
    result = 'Remis';
    results.draws += 1;
  }
  else if(computerMove === 'Papper')
  {
    result = 'Przegrałeś';
    results.defeats += 1;
  }
  else if(computerMove === 'Scissors')
  {
    result = 'Wygrałeś';
    results.wins += 1;
  }
}
else if (userMove === 'Papper')
{
  userMoveImg = 'paper-emoji.png';
  if(computerMove === 'Rock'){
    result = 'Wygrałeś';
    results.wins += 1;
  }
  else if(computerMove === 'Papper')
  {
    result = 'Remis';
    results.draws += 1;
  }
  else if(computerMove === 'Scissors')
  {
    result = 'Przegrałeś';
    results.defeats += 1;
  }
}
else if (userMove === 'Scissors')
{
  userMoveImg = 'scissors-emoji.png';
  if(computerMove === 'Rock')
  {
    result = 'Przegrałeś';
    results.defeats += 1;
  }
  else if(computerMove === 'Papper')
  {
    result = 'Wygrałeś';
    results.wins += 1;
  }
  else if(computerMove === 'Scissors')
  {
    result = 'Remis';
    results.draws += 1;
  }
}
if(result === 'Wygrałeś')
{
  document.querySelector('.wins').innerHTML = `Wygrane: ${results.wins}`;
}
else if(result === 'Remis')
{
  document.querySelector('.draws').innerHTML = `Remisy: ${results.draws}`;
}
else if (result === 'Przegrałeś')
{
  document.querySelector('.defeats').innerHTML = `Przegrane: ${results.defeats}`;
}
if(computerMove === 'Rock')
{
  computerMoveImg = 'rock-emoji.png';
}
else if(computerMove === 'Papper')
{
  computerMoveImg = 'paper-emoji.png'
}
else if(computerMove === 'Scissors')
{
  computerMoveImg = 'scissors-emoji.png';
}
localStorage.setItem('result', result);
localStorage.setItem('userMoveImg', userMoveImg);
localStorage.setItem('userMove', userMove);
localStorage.setItem('computerMoveImg', computerMoveImg);
localStorage.setItem('computerMove', computerMove);
messages(result, userMoveImg, userMove, computerMoveImg, computerMove);
localStorage.setItem('results', JSON.stringify(results));
}